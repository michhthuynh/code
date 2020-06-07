const express = require('express')
const router = express.Router()
const authRoute = require('./auth.route')
const productsRoute = require('./auth.route')

router.use('/auth', authRoute)
router.use('/product', productsRoute)

module.exports = router