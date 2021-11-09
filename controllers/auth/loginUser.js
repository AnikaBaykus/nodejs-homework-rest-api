const { userModel } = require('../../model')
const bcrypt = require('bcryptjs')
const { Unauthorized } = require('http-errors')
const jwt = require('jsonwebtoken')

const loginUser = async(req, res, next) => {
  const { email, password, subscription } = req.body
  const user = await userModel.User.findOne({ email })

  const hashPassword = user.password
  const compareResult = bcrypt.compareSync(password, hashPassword)

  if (!user || !compareResult) {
    throw new Unauthorized('Email or password is wrong')
  }

  const payload = {
    id: user._id,
  }
  const { SECRET_KEY } = process.env
  const token = jwt.sign(payload, SECRET_KEY)
  await userModel.User.findByIdAndUpdate(user._id, { token })

  res.status(200).json({
    token: token,
    user: {
      email,
      subscription,
    }
  })
}

module.exports = {
  loginUser
}
