const express = require('express')
const router = express.Router()

const { authControllers } = require('../../controllers')
const { userModel } = require('../../model')
const { validation, controllerWrapper, authenticate } = require('../../middlewares')

const validationUser = validation(userModel.joiUser)

router.post('/signup', validationUser, controllerWrapper(authControllers.registerUser))

router.post('/login', validationUser, controllerWrapper(authControllers.loginUser))

router.post('/logout', controllerWrapper(authenticate), controllerWrapper(authControllers.logoutUser))

router.get('/current', controllerWrapper(authenticate), controllerWrapper(authControllers.currentUser))

module.exports = router
