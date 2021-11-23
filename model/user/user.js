const { Schema, model } = require('mongoose')
const Joi = require('joi')

const emailRegExp = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/
const passwordRegExp = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/

const userSchema = Schema({
  password: {
    type: String,
    match: passwordRegExp,
    required: [true, 'Password is required'],
  },
  email: {
    type: String,
    match: emailRegExp,
    required: [true, 'Email is required'],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ['starter', 'pro', 'business'],
    default: 'starter'
  },
  token: {
    type: String,
    default: null,
  },
  avatarURL: {
    type: String,
    default: '',
  },
  verify: {
    type: Boolean,
    default: false,
  },
  verifyToken: {
    type: String,
    required: [true, 'Verify token is required'],
  },
},
{
  versionKey: false,
  timestamp: true
}
)

const joiUser = Joi.object({
  password: Joi.string().pattern(passwordRegExp).required(),
  email: Joi.string().pattern(emailRegExp).required(),
  subscription: Joi.string(),
  token: Joi.string(),
  avatarURL: Joi.string(),
  verify: Joi.boolean(),
})

const User = model('user', userSchema)

module.exports = {
  User,
  joiUser
}
