const { v4: uuidv4 } = require('uuid')
const models = require('../../models')
const Status = models.Status

const getStatuses = async (req) => {
    return await Status.findAll({
        include: [
            {
                model: models.User,
                as: 'user',
                attributes: ['id', 'name', 'username', 'email']
            }
        ]
    })
}

const createStatus = async (req) => {
    return await Status.create({
        id: uuidv4(),
        user_id: req.user_id,
        title: req.body.title,
        body: req.body.body
    })
}

const findStatus = async (param) => {
    const status = await Status.findByPk(param, {
        include: [
            {
                model: models.User,
                as: 'user',
                attributes: ['id', 'name', 'username', 'email']
            }
        ]
    })

    if (!status) {
        throw new Error('Status not found')
    }

    return status
}

const updateStatus = async (req, status) => {
    if (status.user_id !== req.user_id) {
        throw new Error('You are not authorized to update this status')
    }

    return await status.update({
        title: req.body.title,
        body: req.body.body
    })
}

const deleteStatus = async (status) => {
    return await status.destroy()
}

module.exports = {
    getStatuses,
    createStatus,
    findStatus,
    updateStatus,
    deleteStatus
}