const mongoose = require('mongoose')
const User = mongoose.model('User')
const jwt = require('jsonwebtoken')
require('dotenv').config({ path: 'variables.env' })

exports.register = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = new User({ email, password })
    await user.save()

    let token = jwt.sign(user.toJSON(), process.env.SECRET)
    res.status(200).send({ success: true, message: 'Registration successfull', user, token: `JWT ${token}` })
  } catch (error) {
    res.status(400).send({ success: false, message: 'Email already exists' })
  }
}

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch && !err) {
        let token = jwt.sign(user.toJSON(), process.env.SECRET)
        res.status(200).send({ success: true, message: 'Login successfull', user, token: `JWT ${token}` })
      } else {
        res.status(401).send({ success: false, message: 'Authentication failed. Password invalid' })
      }
    })
  } catch (err) {
    res.status(400).send({ success: false, message: 'Authentication failed. User does not exist' })
  }
}

exports.getUser = async (req, res) => {
  const userObject = {
    id: req.user.id,
    email: req.user.email
  }

  res.status(200).send({ success: true, user: userObject })
}
