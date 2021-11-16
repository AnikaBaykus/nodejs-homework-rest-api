const express = require('express')
const router = express.Router()

const { contactsControllers } = require('../../controllers')
const { contactsModel } = require('../../model')
const { validation, controllerWrapper, authenticate } = require('../../middlewares')

const validationContact = validation(contactsModel.joiContact)
const validationFavorite = validation(contactsModel.joiFavorite)

router.get('/', controllerWrapper(authenticate), contactsControllers.readListContacts)

router.get('/:contactId', controllerWrapper(authenticate), contactsControllers.readContact)

router.post('/', controllerWrapper(authenticate), validationContact, contactsControllers.createContact)

router.delete('/:contactId', controllerWrapper(authenticate), contactsControllers.deleteContact)

router.put('/:contactId', controllerWrapper(authenticate), validationContact, contactsControllers.updateContactById)

router.patch('/:contactId', controllerWrapper(authenticate), validationContact, contactsControllers.patchContactById)

router.patch('/:contactId/favorite', controllerWrapper(authenticate), validationFavorite, contactsControllers.updateContactFavorite)

module.exports = router
