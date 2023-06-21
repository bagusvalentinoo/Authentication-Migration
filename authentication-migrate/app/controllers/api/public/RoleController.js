const RoleService = require('../../../services/public/RoleService')

exports.index = async (req, res) => {
    try {
        const roles = await RoleService.getRoles()
        return res.status(200).json({
            status_code: 200,
            message: 'Successfully get roles information',
            data: roles
        })
    } catch (error) {
        return res.status(400).json({
            status_code: 400,
            message: error.message
        })
    }
}