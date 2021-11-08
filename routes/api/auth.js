const express = require('express')
const router = express.Router()

const { authControllers } = require('../../controllers')
const { userModel } = require('../../model')
const { validation } = require('../../middlewares')

const validationUser = validation(userModel.joiUser)
// const validationFavorite = validation(contactsModel.joiFavorite)

router.post('/signup', validationUser, authControllers.registerUser)

router.post('/login', validationUser, authControllers.loginUser)

// router.post('/logout', authControllers.logoutUser)

// router.get('/current', authControllers.currentUser)

module.exports = router
