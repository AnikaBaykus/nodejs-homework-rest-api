const express = require('express')
const router = express.Router()

const { contactsControllers } = require('../../controllers')
const {
  postContactValidate,
  patchContactValidate
} = require('../../middlewares/validations')

router.get('/', contactsControllers.getListContacts)

router.get('/:contactId', contactsControllers.getContact)

router.post('/', postContactValidate, contactsControllers.postContact)

router.delete('/:contactId', contactsControllers.deleteContact)

router.put('/:contactId', postContactValidate, contactsControllers.putContactById)

router.patch('/:contactId', patchContactValidate, contactsControllers.patchContactById)

module.exports = router
