const { userModel } = require('../../model')
const bcrypt = require('bcryptjs')
const { Conflict } = require('http-errors')

const fs = require('fs/promises')
const path = require('path')

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
  const newUser = await userModel.User.create({ password: hashPassword, email, subscription, avatarURL: avatar })

  const id = newUser._id.toString()
  const updatePatch = path.join(userDir, id)
  await fs.mkdir(updatePatch)

  res.status(201).json({
    message: {
      email,
      subscription,
    }
  })
}

module.exports = {
  registerUser
}
