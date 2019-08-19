const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DeckSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    dropDups: true
  },
  type: {
    default: undefined,
    type: String
  },
  colors: {
    type: [String],
    default: undefined
  },
  cards: {
    type: [String],
    default: undefined
  }
})

module.exports = mongoose.model('Deck', DeckSchema)
