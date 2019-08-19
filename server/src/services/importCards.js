const mongoose = require('mongoose')
const Card = mongoose.model('Card')
const fs = require('fs')
const path = require('path')

const filename = 'AllSets-x.json'

const mutateData = (json) => {
  return json.map(json => json.cards)
}

export const importCards = () => {
  let cards = JSON.parse(fs.readFileSync(path.resolve(__dirname, filename), 'utf-8'))
  if (!cards.length > 0) {
    throw new Error('Could not read JSON file')
  }

  cards = mutateData(cards)

  Card.insertMany(this.cards)
    .then(dep => {
      return dep
    })
    .catch(err => {
      console.log(err)
      throw new Error('Problems importing data')
    })
}
