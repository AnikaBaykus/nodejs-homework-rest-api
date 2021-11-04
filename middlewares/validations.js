const Joi = require('joi')

const postContactValidate = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['ru', 'com', 'net'] } }).required(),
    phone: Joi.string().pattern(
      '^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$'
    ).required()
  })

  const validationResult = schema.validate(req.body)
  if (validationResult.error) {
    return res.status(400).json({ message: validationResult.error.details })
  }

  next()
}

const patchContactValidate = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).optional(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['ru', 'com', 'net'] } }).optional(),
    phone: Joi.string().pattern(
      '^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$'
    ).optional(),
  })

  const validationResult = schema.validate(req.body)
  if (validationResult.error) {
    return res.status(400).json({ message: validationResult.error.details })
  }

  next()
}

module.exports = {
  postContactValidate,
  patchContactValidate
}
