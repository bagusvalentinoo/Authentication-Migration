const express = require('express')
const router = express.Router()
const ApiController = '../../../app/controllers/api'
const StatusController = require(ApiController + '/user/StatusController')
const middlewares = '../../../app/middlewares'
const { verifyJwtToken } = require(middlewares + '/TokenVerifyMiddleware')
const {
    isAdmin,
    isPm,
    isUser
} = require(middlewares + '/RoleMiddleware')

router.get('/status', [verifyJwtToken, isAdmin, isPm], async (req, res) => {
    StatusController.index(req, res)
})

router.post('/status', [verifyJwtToken, isAdmin, isPm], async (req, res) => {
    StatusController.store(req, res)
})

router.get('/status/:id', [verifyJwtToken, isAdmin, isPm], async (req, res) => {
    StatusController.show(req, res)
})

router.put('/status/:id', [verifyJwtToken, isAdmin, isPm], async (req, res) => {
    StatusController.update(req, res)
})

router.delete('/status/:id', [verifyJwtToken, isAdmin, isPm], async (req, res) => {
    StatusController.destroy(req, res)
})

module.exports = router