const { registerUser } = require('./registerUser')
const { loginUser } = require('./loginUser')
const { logoutUser } = require('./logoutUser')
const { currentUser } = require('./currentUser')
const { updateAvatar } = require('./updateAvatar')

module.exports = {
  updateAvatar,
  registerUser,
  loginUser,
  logoutUser,
  currentUser
}
