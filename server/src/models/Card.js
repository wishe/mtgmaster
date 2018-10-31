const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CardSchema = new Schema({
  layout: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  names: {
    type: [String]
  },
  manaCost: {
    type: Number
  },
  cmc: {
    type: String
  },
  colors: {
    type: [String]
  },
  colorIdentity: {
    type: [String]
  },
  type: {
    type: String
  },
  supertypes: {
    type: [String]
  },
  types: {
    type: [String]
  },
  subtypes: {
    type: [String]
  },
  rarity: {
    type: String
  },
  text: {
    type: String
  },
  flavor: {
    type: String
  },
  artist: {
    type: String
  },
  number: {
    type: String
  },
  power: {
    type: String
  },
  toughness: {
    type: String
  },
  loyalty: {
    type: Number
  },
  multiverseid: {
    type: Number
  },
  variations: {
    type: [Number]
  },
  imageName: {
    type: String
  },
  watermark: {
    type: String
  },
  border: {
    type: String
  },
  timeshifted: {
    type: Boolean
  },
  hand: {
    type: Number
  },
  life: {
    type: Number
  },
  reserved: {
    type: Boolean
  },
  releaseDate: {
    type: String
  },
  starter: {
    type: Boolean
  },
  mciNumber: {
    type: Number
  },
  rulings: {
    type: [Object]
  },
  foreignNames: {
    type: [Object]
  },
  printings: {
    type: [String]
  },
  originalText: {
    type: String
  },
  originalType: {
    type: String
  },
  legalities: {
    type: [Object]
  },
  source: {
    type: String
  }
})

module.exports = mongoose.model('Card', CardSchema)
