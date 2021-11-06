
const { contactsModel } = require('../../model')

const patchContactById = async (req, res, next) => {
  const { contactId } = req.params
  try {
    const contact = await contactsModel.Contact.findByIdAndUpdate(contactId, req.body)

    contact
      ? res.json({
        status: 'success',
        code: 200,
        data: {
          result: contact
        }
      })
      : res.status(404).json({ message: 'Not found' })
  } catch (error) {
    console.log('Ошибка patchContacts')
  }
}

module.exports = { patchContactById }
