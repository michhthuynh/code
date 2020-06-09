const express = require('express')
const app = express()
const PORT = 3000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const apiRoute = require('./routes/api.route')

require('dotenv').config()

// config express 
app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// config mongoose
const optionMongoose = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(process.env.URI_MONGOOSE, optionMongoose, () => console.log('connected to DB!'));

app.use('/api', apiRoute)

app.listen(3000, () => {
    console.log(`Server is running at ${PORT}`)
})
