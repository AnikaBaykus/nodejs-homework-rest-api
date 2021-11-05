const express = require('express')
const router = express.Router()

const { contactsControllers } = require('../../controllers')
const { contactValidations } = require('../../middlewares')

router.get('/', contactsControllers.getListContacts)

router.get('/:contactId', contactsControllers.getContact)

router.post('/', contactValidations.postContactValidate, contactsControllers.postContact)

router.delete('/:contactId', contactsControllers.deleteContact)

router.put('/:contactId', contactValidations.postContactValidate, contactsControllers.putContactById)

router.patch('/:contactId', contactValidations.patchContactValidate, contactsControllers.patchContactById)

module.exports = router
