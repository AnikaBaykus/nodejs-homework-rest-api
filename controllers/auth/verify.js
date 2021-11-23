const { userModel } = require('../../model')
const { NotFound } = require('http-errors')

const verify = async(req, res) => {
  const { verifyToken } = req.params
  const user = await userModel.User.findOne({ verifyToken })
  if (!user) {
    throw new NotFound('User not found')
  }
  await userModel.User.findByIdAndUpdate(user._id, { verifyToken: null, verify: true })
  res.send('Verification successful')
}

module.exports = {
  verify
}
