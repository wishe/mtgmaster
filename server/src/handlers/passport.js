const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/User')

require('dotenv').config({ path: 'variables.env' })

module.exports = () => {
  let opts = {}

  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('JWT')
  opts.secretOrKey = process.env.SECRET

  passport.use(new JwtStrategy(opts, async function (payload, done) {
    try {
      const user = await User.findOne({ id: payload.id })
      return done(null, user)
    } catch (err) {
      return done(err, false)
    }
  }))
}
