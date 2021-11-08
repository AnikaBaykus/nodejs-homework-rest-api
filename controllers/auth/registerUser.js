const { userModel } = require('../../model')
const bcrypt = require('bcryptjs')

const registerUser = async(req, res, next) => {
  try {
    const { email, password, subscription } = req.body
    const user = await userModel.User.findOne({ email })
    if (user) {
      return res.status(409).json({ message: 'Email in use' })
    }

    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    await userModel.User.create({ password: hashPassword, email, subscription })

    res.status(201).json({
      message: {
        email,
        subscription,
      }
    })
  } catch (error) {
    console.log('Ошибка регистрации')
    next(error)
  }
}

module.exports = {
  registerUser
}
