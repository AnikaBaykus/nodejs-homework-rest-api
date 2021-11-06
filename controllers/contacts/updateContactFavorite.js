const { contactsModel } = require('../../model')

const updateContactFavorite = async (req, res, next) => {
  const { contactId } = req.params
  const { favorite } = req.body
  try {
    if (!Object.keys(req.body).includes('favorite')) {
      return res.status(400).json({ message: 'missing field favorite' })
    } else {
      const contact = await contactsModel.Contact.findByIdAndUpdate(contactId, { favorite }, { new: true })

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
    console.log('Ошибка updateContactFavorite')
    next(error)
  }
}

module.exports = { updateContactFavorite }
