const mongoose = require('mongoose')

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' })

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true })
mongoose.set('useCreateIndex', true)
mongoose.Promise = global.Promise
mongoose.connection.on('error', (err) => {
  console.error(err.message)
})

// Import our models
require('./models/User')

// Start our app!
const app = require('./app')

app.set('port', process.env.PORT || 8081)
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`)
})
