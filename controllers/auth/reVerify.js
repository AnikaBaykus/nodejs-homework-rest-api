const { userModel } = require('../../model')
const { NotFound, BadRequest } = require('http-errors')
const { sendMail } = require('../../utils/mail')

const { PORT = 3000 } = process.env

const reVerify = async(req, res) => {
  const { email } = req.body
  const user = await userModel.User.findOne({ email })
  const { verifyToken } = user

  if (!user) {
    throw new NotFound('User not found')
  }
  if (user.verify) {
    throw new BadRequest('Verification has already been passed')
  }

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

  res.status(200).json({
    message: {
      message: 'Verification email sent',
      text: `<a href='http://localhost:${PORT}/api/users/verify/${verifyToken}'>click here</a>`
    }
  })
}
module.exports = {
  reVerify
}
