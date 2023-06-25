const express = require('express')
const router = express.Router()
const ApiController = '../../../app/controllers/api'
const SignUpController = require(`${ApiController}/auth/SignUpController`)
const SignInController = require(`${ApiController}/auth/SignInController`)
const PacketController = require(`${ApiController}/public/product/PacketController`)

router.post('/auth/sign-up', async (req, res) => {
    SignUpController.signUp(req, res)
})

router.post('/auth/sign-in', async (req, res) => {
    SignInController.signIn(req, res)
})

router.get('/packets', async (req, res) => {
    PacketController.index(req, res)
})

module.exports = router