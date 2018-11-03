import scryfall from '@/services/scryfall'

export default {
  getAllCardsRequest(params) {
    return scryfall().get('/cards', {
      params
    })
  },
  searchCardsRequest(params) {
    return scryfall().get('/cards/search', {
      params
    })
  }
}