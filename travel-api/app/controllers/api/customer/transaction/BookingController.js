const BookingService = require('../../../../services/transaction/BookingService')
const PaymentService = require('../../../../services/transaction/PaymentService')

exports.store = async (req, res) => {
    try {
        const booking = await BookingService.createBooking(req)
        const payment = await PaymentService.createPayment(booking)

        res.status(201).json({
            status_code: 201,
            message: 'Booking successfully created, please to complete the payment',
            data: {
                payment_id: payment.id,
                total: payment.total
            }
        })
    } catch (err) {
        res.status(400).json({
            status_code: 400,
            message: err.message
        })
    }
}