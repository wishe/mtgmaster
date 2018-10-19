const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const cors = require('cors')
const morgan = require('morgan')
const passport = require('passport')
const errorHandlers = require('./handlers/errorHandlers')
const routes = require('./routes/index')
require('./handlers/passport')

// Init APP
const app = express()

// Middleware
app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({
  secret: 'mtgmaster',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

// Routes
app.use('/', routes)

// 404 Handler
app.use(errorHandlers.notFound)

// MongoDB Validation Errors
app.use(errorHandlers.mongoValidationErrors)

// Other errors
if (app.get('env') === 'development') {
  app.use(errorHandlers.developmentErrors)
}

// Errors in Production
app.use(errorHandlers.productionErrors)

// done! we export it so we can start the site in start.js
module.exports = app
