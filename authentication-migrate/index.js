const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.APP_PORT || 3000
const publicRoutes = require('./routes/api/v1/public')
const generalRoutes = require('./routes/api/v1/general')

app.use(cors())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/api/v1/public', publicRoutes)
app.use('/api/v1/general', generalRoutes)

app.listen(port, () => {
    console.log('Server is running on http://localhost:' + port)
})