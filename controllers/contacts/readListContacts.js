const { contactsModel } = require('../../model')

const readListContacts = async (req, res, next) => {
  try {
    const list = await contactsModel.Contact.find({})
    res.json({
      status: 'success',
      code: 200,
      data: {
        result: list
      }
    })
  } catch (error) {
    console.log('Ошибка readListContacts')
    next(error)
  }
}

module.exports = { readListContacts }
