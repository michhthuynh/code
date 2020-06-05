const express = require('express')
const app = express()
const PORT = 3000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const authRoute = require('./routes/auth.route.js')
const productsRoute = require('./routes/products.route.js') 

require('dotenv').config()

// config express 
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

// config mongoose
const optionMongoose = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(process.env.URI_MONGOOSE, optionMongoose, () => console.log('connected to DB!'));

app.use('/auth', authRoute)
app.use('/products', productsRoute)


app.listen(3000, () => {
    console.log(`Server is running at ${PORT}`)
})
