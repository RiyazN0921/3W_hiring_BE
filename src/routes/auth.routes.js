const express = require('express')

const AuthController = require('../controller/user.controller')

const AuthRouter = express.Router()

AuthRouter.post('/update-user', AuthController.updateUser)

AuthRouter.post('/signup', AuthController.onboardUser)

AuthRouter.post('/login', AuthController.loginUser)

AuthRouter.get('/fetch-all', AuthController.fetchAllUsers)

module.exports = AuthRouter
