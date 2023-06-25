const models = require('../../models')
const Customer = models.Customer
const Packet = models.Packet
const Booking = models.Booking

const getTotalPriceFromPacketByBookingId = async (bookingId) => {
    const booking = await Booking.findByPk(bookingId)
    const packet = await booking.getPacket()

    return packet.price
}

const getCustomerIdByUserId = async (userId) => {
    const customer = await Customer.findOne({
        where: {
            user_id: userId
        }
    })

    return customer.id
}

const getPacketIdFromNamePakcet = async (namePacket) => {
    const packet = await Packet.findOne({
        where: {
            name: namePacket
        }
    })

    if (!packet) throw new Error('Packet not found')

    return packet.id
}

module.exports = {
    getTotalPriceFromPacketByBookingId,
    getCustomerIdByUserId,
    getPacketIdFromNamePakcet
}