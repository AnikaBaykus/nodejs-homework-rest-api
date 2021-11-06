const { contactsModel } = require('../../model')

const readContact = async (req, res, next) => {
  const { contactId } = req.params
  try {
    const contact = await contactsModel.Contact.findById(contactId)

    contact
      ? res.json({
        status: 'success',
        code: 200,
        data: {
          result: contact
        }
      })
      : res.status(404).json({ message: 'failure, no contact found' })
  } catch (error) {
    console.log('Ошибка readContact')
    next(error)
  }
}

module.exports = { readContact }
