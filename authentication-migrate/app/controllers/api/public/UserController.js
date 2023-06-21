const UserService = require('../../../services/public/UserService')

exports.index = async (req, res) => {
    try {
        const users = await UserService.getUsers()

        return res.status(200).json({
            status_code: 200,
            message: 'Successfully get users information',
            data: users
        })
    } catch (error) {
        return res.status(400).json({
            status_code: 400,
            message: error.message
        })
    }
}