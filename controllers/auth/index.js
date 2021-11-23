const { registerUser } = require('./registerUser')
const { loginUser } = require('./loginUser')
const { logoutUser } = require('./logoutUser')
const { currentUser } = require('./currentUser')
const { updateAvatar } = require('./updateAvatar')
const { verify } = require('./verify')
const { reVerify } = require('./reVerify')

module.exports = {
  reVerify,
  verify,
  updateAvatar,
  registerUser,
  loginUser,
  logoutUser,
  currentUser
}
