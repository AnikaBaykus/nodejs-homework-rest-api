const { contactsModel } = require('../../model')

const createContact = async (req, res, next) => {
  try {
    const result = await contactsModel.Contact.create(req.body)
    res.status(201).json({
      result
    })
  } catch (error) {
    console.log('Ошибка createContact')
    next(error)
  }
}

module.exports = { createContact }
