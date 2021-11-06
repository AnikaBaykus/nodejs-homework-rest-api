const { Schema, model } = require('mongoose')
const Joi = require('joi')

const nameRegExp = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,35})?)/
const emailRegExp = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/
const phoneRegExp = /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,14}\d$/

const contactSchema = Schema({
  name: {
    type: String,
    trim: true,
    match: nameRegExp,
    required: [true, 'Set name for contact'],
  },
  email: {
    type: String,
    minLength: 5,
    match: emailRegExp,
  },
  phone: {
    type: String,
    match: phoneRegExp,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
},
{
  versionKey: false,
  timestamp: true
}
)

const joiContact = Joi.object({
  name: Joi.string().pattern(nameRegExp).required(),
  email: Joi.string().pattern(emailRegExp),
  phone: Joi.string().pattern(phoneRegExp),
  favorite: Joi.boolean().default(false)
})

const joiFavorite = Joi.object({
  favorite: Joi.boolean().default(false)
})

const Contact = model('contact', contactSchema)

module.exports = {
  Contact,
  joiContact,
  joiFavorite
}
