const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcryptjs')
const models = require('../../models')
const Role = models.Role
const User = models.User
const Op = models.Sequelize.Op

const checkRolesExisted = async (roles) => {
    for (let i = 0; i < roles.length; i++) {
        const role = await Role.findOne({
            where: {
                name: roles[i]
            }
        })

        if (!role) throw new Error('Role ' + roles[i] + ' is not exist')

        roles[i] = role
    }

    return roles
}

const checkUsernameOrEmailExisted = async (req) => {
    return await User.findOne({
        where: {
            [Op.or]: [
                {
                    username: req.body.username
                },
                {
                    email: req.body.email
                }
            ]
        }
    })
}

const checkPasswordConfirm = async (req) => {
    return req.body.password === req.body.confirm_password
}

const signUp = async (req, roles) => {
    const isUsernameOrEmailExisted = await checkUsernameOrEmailExisted(req)
    const isPasswordConfirm = await checkPasswordConfirm(req)

    if (isUsernameOrEmailExisted) throw new Error('Username or email is already exist')
    if (!isPasswordConfirm) throw new Error('Password confirm is not match')

    const user = await User.create({
        id: uuidv4(),
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    })
    user.setRoles(roles)

    return User
}

module.exports = {
    checkRolesExisted,
    signUp
}