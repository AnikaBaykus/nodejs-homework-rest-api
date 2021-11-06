const { readListContacts } = require('./readListContacts')
const { readContact } = require('./readContact')
const { createContact } = require('./createContact')
const { deleteContact } = require('./deleteContact')
const { updateContactById } = require('./updateContactById')
const { patchContactById } = require('./patchContactById')
const { updateContactFavorite } = require('./updateContactFavorite')

module.exports = {
  readListContacts,
  readContact,
  createContact,
  deleteContact,
  updateContactById,
  patchContactById,
  updateContactFavorite

}
