const { v1: uuidv1 } = require('uuid')
const { getCustomerIdByUserId, getPacketIdFromNamePakcet } = require('../../helpers/services/ModelManipulation')
const models = require('../../models')
const Booking = models.Booking

const createBooking = async (req) => {
    const customerId = await getCustomerIdByUserId(req.user_id)
    const packetId = await getPacketIdFromNamePakcet(req.body.packet_name)

    return await Booking.create({
        id: uuidv1(),
        customer_id: customerId,
        packet_id: packetId,
        booking_date: req.body.booking_date,
        total_person: req.body.total_person
    })
}

const findBooking = async (param) => {
    const booking = await Booking.findByPk(param)

    if (!booking) throw new Error('Booking not found')

    return booking
}

const updateBooking = async (booking) => {
    await booking.update({
        status: 'Finished'
    })
}

module.exports = {
    createBooking,
    findBooking,
    updateBooking
}