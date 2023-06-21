const express = require('express')
const router = express.Router()
const ApiController = '../../../app/controllers/api'
const RoleController = require(ApiController + '/public/RoleController')
const UserController = require(ApiController + '/public/UserController')
const SignUpController = require(ApiController + '/auth/SignUpController')
const SignInController = require(ApiController + '/auth/SignInController')

router.get('/roles', async (req, res) => {
    RoleController.index(req, res)
})

router.get('/users', async (req, res) => {
    UserController.index(req, res)
})

router.post('/auth/sign-up', async (req, res) => {
    SignUpController.signUp(req, res)
})

router.post('/auth/sign-in', async (req, res) => {
    SignInController.signIn(req, res)
})

module.exports = router
