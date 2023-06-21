const models = require('../../models')
const Role = models.Role

exports.getRoles = async () => {
    return await Role.findAll()
}