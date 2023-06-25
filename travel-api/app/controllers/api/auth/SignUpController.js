const SignUpService = require('../../../services/auth/SignUpService')

exports.signUp = async (req, res) => {
    try {
        await SignUpService.signUp(req)

        return res.status(201).json({
            status_code: 201,
            message: 'User successfully registered!'
        })
    } catch (err) {
        return res.status(400).json({
            status_code: 400,
            message: err.message
        })
    }
}