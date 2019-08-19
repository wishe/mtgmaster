import api from '@/services/api'

export default {
  myDecksRequest() {
    return api().get('/decks/mine')
  },
  playgroupDecksRequest() {
    return api().get('/decks/playgroups')
  }
}