require('dotenv').config({ path: './config.env' })
const express = require('express')
const cors = require('cors')
const userRoute = require('./routes/user')

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(userRoute)

app.listen(port, () => { console.log(`Server listening on ${port}`)})