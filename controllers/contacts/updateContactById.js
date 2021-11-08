const { contactsModel } = require('../../model')

const updateContactById = async (req, res, next) => {
  const { contactId } = req.params
  try {
    if (!Object.keys(req.body).includes('name' || 'email' || 'phone')) {
      return res.status(404).json({ message: 'missing fields' })
    } else {
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
    }
    console.log(Object.keys(req.body))
  } catch (error) {
    console.log('Ошибка updateContactById ')
    next(error)
  }
}

module.exports = { updateContactById }
