const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT || 8000
const publicRoutes = require('./routes/api/v1/public')
const adminRoutes = require('./routes/api/v1/admin')
const customerRoutes = require('./routes/api/v1/customer')

app.use(cors())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/api/v1', publicRoutes)
app.use('/api/v1/admin', adminRoutes)
app.use('/api/v1/customer', customerRoutes)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})