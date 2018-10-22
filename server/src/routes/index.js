const express = require('express')
const router = express.Router()
const passport = require('passport')
require('../handlers/passport')(passport)
const authController = require('../controllers/authController')
// const { catchErrors } = require('../handlers/errorHandlers')

router.post('/login', authController.login)
router.post('/register', authController.register)
router.get('/user', passport.authenticate('jwt', { session: false }), authController.getUser)

module.exports = router
