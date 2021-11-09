
const { userModel } = require('../../model')
const { Unauthorized } = require('http-errors')

const currentUser = async(req, res, next) => {
  const { token } = req.user

  const user = await userModel.User.findOne({ token })
  const { email, subscription } = user
  if (!user) {
    throw new Unauthorized('Not authorized')
  }
  res.status(200).json({
    token: token,
    user: {
      email,
      subscription
    }
  })
}

module.exports = {
  currentUser
}
