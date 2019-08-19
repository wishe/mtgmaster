import * as types from '@/store/types'
import decksApi from '@/services/api/decks'

export default {
  getMyDecks({ commit }) {
    return new Promise((resolve, reject) => {
      return decksApi.myDecksRequest()
      .then(res => {
        commit(types.FETCH_MY_DECKS_SUCCESS, { myDecks: res.data.data })
        console.log(res)
        resolve()
      })
      .catch(() => {
        commit(types.FETCH_MY_DECKS_FAILURE)
        reject()
      })
      .finally(() => {

      })
    })
  }
}
