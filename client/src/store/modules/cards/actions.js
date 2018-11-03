import * as types from '@/store/types'
import cardsApi from '@/services/scryfall/cards'

export default {
  getAllCards({ commit }, params) {
    commit(types.LOADING_ENABLED)
    commit(types.CLEAR_CARDS)
    return new Promise((resolve, reject) => {
      return cardsApi.getAllCardsRequest(params)
      .then(res => {
        commit(types.FETCH_ALL_CARDS_SUCCESS, { cards: res.data, params })
        resolve()
      })
      .catch(error => {
        commit(types.FETCH_ALL_CARDS_FAILURE, error.response)
        reject()
      })
      .finally(() => {
        commit(types.LOADING_DISABLED)
      })
    })
  },
  searchCards({ commit }, params) {
    commit(types.LOADING_ENABLED)
    commit(types.CLEAR_CARDS)
    return new Promise((resolve, reject) => {
      return cardsApi.searchCardsRequest(params)
      .then(res => {
        commit(types.SEARCH_CARDS_SUCCESS, { cards: res.data, params })
        resolve()
      })
      .catch((error) => {
        commit(types.SEARCH_CARDS_FAILURE, error.response)
        reject()
      })
      .finally(() => {
        commit(types.LOADING_DISABLED)
      })
    })
  },
}
