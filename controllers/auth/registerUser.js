const { userModel } = require('../../model')
const bcrypt = require('bcryptjs')
const { Conflict } = require('http-errors')

const registerUser = async(req, res, next) => {
  const { email, password, subscription } = req.body
  const user = await userModel.User.findOne({ email })

  if (user) {
    throw new Conflict('Email in use')
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  await userModel.User.create({ password: hashPassword, email, subscription })

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
