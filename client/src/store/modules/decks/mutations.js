import * as types from '@/store/types'

export default {
  [types.FETCH_MY_DECKS_SUCCESS] (state, { myDecks }) {
    state.mine = myDecks
  },
  [types.FETCH_MY_DECKS_FAILURE] (state) {
    state.mine = []
  }
}
