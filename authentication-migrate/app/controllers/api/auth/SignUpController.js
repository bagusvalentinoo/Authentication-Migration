const SignUpService = require('../../../services/auth/SignUpService')

exports.signUp = async (req, res) => {
    try {
        const roles = await SignUpService.checkRolesExisted(req.body.roles)
        await SignUpService.signUp(req, roles)

        return res.status(201).json({
            status_code: 201,
            message: 'User was registered successfully!'
        })
    } catch (error) {
        return res.status(400).json({
            status_code: 400,
            message: error.message
        })
    }
}