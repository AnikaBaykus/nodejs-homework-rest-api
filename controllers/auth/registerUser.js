const { userModel } = require('../../model')
const bcrypt = require('bcryptjs')
const { Conflict } = require('http-errors')
const { v4: uuidv4 } = require('uuid')
const { sendMail } = require('../../utils/mail')

const fs = require('fs/promises')
const path = require('path')
const { PORT = 3000 } = process.env

const gravatar = require('gravatar')

const userDir = path.join(__dirname, '../../', 'public/avatars')

const registerUser = async(req, res, next) => {
  const { email, password, subscription } = req.body
  const user = await userModel.User.findOne({ email })
  const avatar = gravatar.url(email, { s: '200', r: 'x' }, true)

  if (user) {
    throw new Conflict('Email in use')
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  const newUser = { password: hashPassword, email, subscription, avatarURL: avatar, verifyToken: uuidv4() }

  const { verifyToken } = newUser

  const letter = {
    to: '',
    subject: 'Verification email',
    html: `<h1>Hello</h1>
    <p>You have successfully registered via mail ${email}.</br>
    To verify your email address, follow the link </br>
    <a href='http://localhost:${PORT}/api/users/verify/${verifyToken}'>click here</a>
    </p>`
  }

  await sendMail(letter)
  const createdUser = await userModel.User.create(newUser)

  const id = createdUser._id.toString()
  const updatePatch = path.join(userDir, id)
  await fs.mkdir(updatePatch)

  res.status(201).json({
    message: {
      email,
      subscription,
      text: `<a href='http://localhost:${PORT}/api/users/verify/${verifyToken}'>click here</a>`
    }
  })
}

module.exports = {
  registerUser
}
