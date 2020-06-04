const express = require('express')
const app = express()
const PORT = 3000

const bodyParser = require('body-parser')

const authRoutes = require('./routes/auth.route.js')
const productsRoutes = require('./routes/products.js') 


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/auth', authRoutes)
app.use('/products', productsRoutes)


app.listen(3000, () => {
    console.log(`Server is running at ${PORT}`)
})
