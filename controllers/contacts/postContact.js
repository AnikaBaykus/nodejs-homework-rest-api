const { contactsModel } = require('../../model')

const postContact = async (req, res, next) => {
  const { name, email, phone } = req.body
  try {
    const contact = await contactsModel.addContact({ name, email, phone })

    contact
      ? res.json({
        status: 'success',
        code: 201,
        data: {
          result: contact
        }
      })
      : res.status(404).json({ message: 'missing required name field' })
  } catch (error) {
    console.log('Ошибка postContacts')
  }
}

module.exports = { postContact }
