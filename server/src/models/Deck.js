const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DeckSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String
  },
  colors: {
    type: [String]
  },
  cards: {
    type: [String],
    default: undefined
  }
})

module.exports = mongoose.model('Deck', DeckSchema)
