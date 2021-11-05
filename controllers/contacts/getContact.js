const { contactsModel } = require('../../model')

const getContact = async (req, res, next) => {
  const { contactId } = req.params
  try {
    const contact = await contactsModel.getContactById(contactId)

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
    console.log('Ошибка getContact')
  }
}

module.exports = { getContact }
