require('dotenv').config()

const express = require('express')
const app = express()
const fs = require('fs')
const jwt = require('jsonwebtoken')
const PORT = 3000


app.get('/', (req, res) => {
    fs.readFile('./db.json', 'utf8', (err, data) => {
        if (err) throw err
        var jsonData = JSON.parse(data)
        console.log(jsonData)
    })
})



app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
})