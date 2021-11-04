const { contactsModel } = require('../../model')

const deleteContact = async (req, res, next) => {
  const { contactId } = req.params
  try {
    const contact = await contactsModel.removeContact(contactId)

    contact
      ? res.json({
        status: 'success',
        code: 200,
        data: {
          result: 'contact deleted'
        }
      })
      : res.status(404).json({ message: 'failure, no contact found' })
  } catch (error) {
    console.log('Ошибка deleteContact')
  }
}

module.exports = { deleteContact }
