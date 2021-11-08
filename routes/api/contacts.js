const express = require('express')
const router = express.Router()

const { contactsControllers } = require('../../controllers')
const { contactsModel } = require('../../model')
const { validation } = require('../../middlewares')

const validationContact = validation(contactsModel.joiContact)
const validationFavorite = validation(contactsModel.joiFavorite)

router.get('/', contactsControllers.readListContacts)

router.get('/:contactId', contactsControllers.readContact)

router.post('/', validationContact, contactsControllers.createContact)

router.delete('/:contactId', contactsControllers.deleteContact)

router.put('/:contactId', validationContact, contactsControllers.updateContactById)

router.patch('/:contactId', validationContact, contactsControllers.patchContactById)

router.patch('/:contactId/favorite', validationFavorite, contactsControllers.updateContactFavorite)

module.exports = router
