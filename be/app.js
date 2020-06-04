const express = require('express')
const app = express()
const PORT = 3000

const auth_routes = require('./routes/auth.js') 
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/auth', auth_routes)

app.post('/test', (req, res) =>{
    const {email} = req.body
    console.log(email)
})

app.listen(3000, () => {
    console.log(`Server is running at ${PORT}`)
})