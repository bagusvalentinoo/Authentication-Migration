const SignInService = require('../../../services/auth/SignInService')

exports.signIn = async (req, res) => {
    try {
        const user = await SignInService.checkSignInCredentials(req)
        const token = await SignInService.signIn(user)

        return res.status(200).json({
            status_code: 200,
            message: 'User was logged in successfully!',
            accessToken: token
        })
    } catch (error) {
        return res.status(400).json({
            status_code: 400,
            message: error.message
        })
    }
}