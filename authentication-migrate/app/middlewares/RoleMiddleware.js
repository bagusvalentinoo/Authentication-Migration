const User = require('../models').User

const isAdmin = async (req, res, next) => {
    const user = await User.findByPk(req.user_id)
    const roles = await user.getRoles()

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'Admin') {
            next()
            return
        }
    }

    return res.status(403).json({
        status_code: 403,
        message: 'Require Admin Role'
    })
}

const isPm = async (req, res, next) => {
    const user = await User.findByPk(req.user_id)
    const roles = await user.getRoles()

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'PM') {
            next()
            return
        }
    }

    return res.status(403).json({
        status_code: 403,
        message: 'Require PM Role'
    })
}

const isUser = async (req, res, next) => {
    const user = await User.findByPk(req.user_id)
    const roles = await user.getRoles()

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'User') {
            next()
            return
        }
    }

    return res.status(403).json({
        status_code: 403,
        message: 'Require User Role'
    })
}

module.exports = {
    isAdmin,
    isPm,
    isUser
}