import * as types from '@/store/types'

export default {
  [types.FETCH_ALL_CARDS_SUCCESS] (state, { cards, params }) {
    state.searching = false
    state.total = cards.total_cards
    state.page = cards.has_more === true ? params.page : null
    state.cards = cards.data
  },
  [types.FETCH_ALL_CARDS_FAILURE] (state, error) {
    state.error = error.data
  },
  [types.SEARCH_CARDS_SUCCESS] (state, { cards, params }) {
    state.searching = true
    state.total = cards.total_cards
    state.page = cards.has_more === true ? params.page : null
    state.cards = cards.data
  },
  [types.SEARCH_CARDS_FAILURE] (state, error) {
    state.total = 0
    state.page = null
    state.error = error.data
  },
  [types.CLEAR_CARDS] (state) {
    state.cards = []
  },
  [types.LOADING_ENABLED] (state) {
    state.loading = true
  },
  [types.LOADING_DISABLED] (state) {
    state.loading = false
  }
}