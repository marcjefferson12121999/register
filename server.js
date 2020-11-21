require ('dotenv').config()

const express = require('express');
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

app.use(express.json())
const registrationRouter = require('./routes/registration')
app.use('/registration', registrationRouter)

app.listen(5000, () => console.log('server started'))