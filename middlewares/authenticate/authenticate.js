const jwt = require('jsonwebtoken')
const { userModel } = require('../../model')
const { Unauthorized } = require('http-errors')

const { SECRET_KEY } = process.env

const authenticate = async(req, res, next) => {
  try {
    const [bearer, token] = req.headers.authorization.split(' ')
    if (bearer !== 'Bearer') {
      throw new Unauthorized('Not authorized1')
    }
    await jwt.verify(token, SECRET_KEY)

    const user = await userModel.User.findOne({ token })
    if (!user) {
      throw new Unauthorized('Not authorized')
    }
    req.user = user
    next()
  } catch (error) {
    throw new Unauthorized(error.message)
  }
}
module.exports = {
  authenticate
}
