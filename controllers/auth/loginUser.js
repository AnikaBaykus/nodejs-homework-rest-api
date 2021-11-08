const { userModel } = require('../../model')
const bcrypt = require('bcryptjs')

const loginUser = async(req, res, next) => {
  try {
    const { email, password, subscription } = req.body
    const user = await userModel.User.findOne({ email })
    console.log(user)

    const hashPassword = user.password
    const compareResult = bcrypt.compareSync(password, hashPassword)

    if (!user || !compareResult) {
      return res.status(401).json({ message: 'Email or password is wrong' })
    }
    const token = 'dknvmvkd.fdjoijmvfdo.'

    res.status(200).json({
      token: token,
      user: {
        email,
        subscription,
      }
    })
  } catch (error) {
    console.log('Ошибка в залогине')
    next(error)
  }
}

module.exports = {
  loginUser
}
