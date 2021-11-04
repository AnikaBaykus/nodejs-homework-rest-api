const { getListContacts } = require('./getListContacts')
const { getContact } = require('./getContact')
const { postContact } = require('./postContact')
const { deleteContact } = require('./deleteContact')
const { putContactById } = require('./putContactById')
const { patchContactById } = require('./patchContactById')
module.exports = {
  getListContacts,
  getContact,
  postContact,
  deleteContact,
  putContactById,
  patchContactById
}
