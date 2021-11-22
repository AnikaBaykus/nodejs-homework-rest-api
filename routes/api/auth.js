const express = require('express')
const router = express.Router()

const { authControllers } = require('../../controllers')
const { userModel } = require('../../model')
const { validation, controllerWrapper, authenticate, upload } = require('../../middlewares')
const validationUser = validation(userModel.joiUser)

router.post('/signup', validationUser, controllerWrapper(authControllers.registerUser))

router.post('/login', validationUser, controllerWrapper(authControllers.loginUser))

router.post('/logout', controllerWrapper(authenticate), controllerWrapper(authControllers.logoutUser))

router.get('/current', controllerWrapper(authenticate), controllerWrapper(authControllers.currentUser))

router.patch('/avatars', upload.single('image'), controllerWrapper(authenticate), controllerWrapper(authControllers.updateAvatar))

module.exports = router
