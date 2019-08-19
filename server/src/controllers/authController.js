const mongoose = require('mongoose')
const User = mongoose.model('User')
const jwt = require('jsonwebtoken')
require('dotenv').config({ path: 'variables.env' })

exports.register = async (req, res, next) => {
  const { email, password } = req.body
  const user = await (new User({ email, password })).save()
  if (user) {
    let token = jwt.sign(user.toJSON(), process.env.SECRET)
    res.status(200).send({ success: true, message: 'Registration successfull', user, token: `JWT ${token}` })
  }
  next({ message: 'Invalid' }, false)
}

exports.login = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email })

  if (user) {
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch && !err) {
        let token = jwt.sign(user.toJSON(), process.env.SECRET)
        res.status(200).send({ success: true, message: 'Login successfull', user, token: `JWT ${token}` })
      } else {
        next()
      }
    })
  } else {
    next()
  }
}

exports.show = async (req, res) => {
  const userObject = {
    id: req.user.id,
    email: req.user.email
  }

  res.status(200).send({ success: true, user: userObject })
}
