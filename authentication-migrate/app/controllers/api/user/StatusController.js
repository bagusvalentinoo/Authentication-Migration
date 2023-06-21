const StatusService = require('../../../services/user/StatusService')

const index = async (req, res) => {
    try {
        const statuses = await StatusService.getStatuses(req)

        return res.status(200).json({
            status_code: 200,
            message: 'Successfully retrieved statuses',
            data: statuses
        })
    } catch (err) {
        return res.status(400).json({
            status_code: 400,
            message: err.message
        })
    }
}

const store = async (req, res) => {
    try {
        await StatusService.createStatus(req)

        return res.status(201).json({
            status_code: 201,
            message: 'Successfully created status'
        })
    } catch (err) {
        return res.status(400).json({
            status_code: 400,
            message: err.message
        })
    }
}

const show = async (req, res) => {
    try {
        const status = await StatusService.findStatus(req.params.id)

        return res.status(200).json({
            status_code: 200,
            message: 'Successfully retrieved status',
            data: status
        })
    } catch (err) {
        return res.status(400).json({
            status_code: 400,
            message: err.message
        })
    }
}

const update = async (req, res) => {
    try {
        const status = await StatusService.findStatus(req.params.id)
        await StatusService.updateStatus(req, status)

        return res.status(200).json({
            status_code: 200,
            message: 'Successfully updated status'
        })
    } catch (err) {
        return res.status(400).json({
            status_code: 400,
            message: err.message
        })
    }
}

const destroy = async (req, res) => {
    try {
        const status = await StatusService.findStatus(req.params.id)
        await StatusService.deleteStatus(status)

        return res.status(200).json({
            status_code: 200,
            message: 'Successfully deleted status'
        })
    } catch (err) {
        return res.status(400).json({
            status_code: 400,
            message: err.message
        })
    }
}

module.exports = {
    index,
    store,
    show,
    update,
    destroy
}