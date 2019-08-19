const express = require('express')
const router = express.Router()
const passport = require('passport')
require('../handlers/passport')(passport)
const AuthController = require('../controllers/AuthController')
const DeckController = require('../controllers/DeckController')
const { catchErrors } = require('../handlers/errorHandlers')

router.post('/login', catchErrors(AuthController.login))
router.post('/register', catchErrors(AuthController.register))
router.get('/user', passport.authenticate('jwt', { session: false }), catchErrors(AuthController.show))

router.get('/decks/mine', passport.authenticate('jwt', { session: false }), catchErrors(DeckController.index))
router.post('/decks', passport.authenticate('jwt', { session: false }), catchErrors(DeckController.store))

module.exports = router
