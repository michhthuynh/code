const express = require('express')
const router = express.Router()
const controller = require('../controllers/auth.controller')


router.get('/', controller.get)
router.post('/', controller.index)

module.exports = router