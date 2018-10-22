const express = require('express')
const router = express.Router()
const passport = require('passport')
require('../handlers/passport')(passport)
const AuthController = require('../controllers/AuthController')
const DeckController = require('../controllers/DeckController')
// const { catchErrors } = require('../handlers/errorHandlers')

router.post('/login', AuthController.login)
router.post('/register', AuthController.register)
router.get('/user', passport.authenticate('jwt', { session: false }), AuthController.show)

router.get('/decks', passport.authenticate('jwt', { session: false }), DeckController.index)
module.exports = router
