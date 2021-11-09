const { userModel } = require('../../model')

const logoutUser = async(req, res, next) => {
  await userModel.User.findByIdAndUpdate(req.user._id, { token: null })
  res.json({
    status: 'success',
    code: 204,
    message: 'No Content'
  })
}

module.exports = {
  logoutUser
}
