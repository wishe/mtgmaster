const mongoose = require('mongoose')
const Deck = mongoose.model('Deck')

exports.index = async (req, res) => {
  try {
    const Decks = await Deck.find({})

    res.status(200).send({ success: true, data: Decks })
  } catch (e) {
    res.status(404).send({ success: false, error: e })
  }
}
