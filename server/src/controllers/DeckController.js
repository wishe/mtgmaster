const mongoose = require('mongoose')
const Deck = mongoose.model('Deck')

exports.index = async (req, res) => {
  try {
    const decks = await Deck.find({})

    res.status(200).send({ success: true, data: decks })
  } catch (e) {
    res.status(404).send({ success: false, error: e })
  }
}

exports.store = async (req, res, next) => {
  try {
    const created = await Deck.create(req.body)

    res.status(200).send({ success: true, data: created })
  } catch (e) {
    res.status(400).send({ success: false, error: e })
  }
}
