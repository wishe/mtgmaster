import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = {
  cards: [],
  total: 0,
  page: 1,
  loading: false,
  searching: false,
  error: {}
};

export default {
  state,
  getters,
  actions,
  mutations
}
