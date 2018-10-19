const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
// const { catchErrors } = require('../handlers/errorHandlers')

router.post('/login', authController.login)

module.exports = router
