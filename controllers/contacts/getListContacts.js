const { contactsModel } = require('../../model')

const getListContacts = async (req, res, next) => {
  try {
    const list = await contactsModel.listContacts()
    res.json({
      status: 'success',
      code: 200,
      data: {
        result: list
      }
    })
  } catch (error) {
    console.log('Ошибка getListContacts')
  }
}

module.exports = { getListContacts }
