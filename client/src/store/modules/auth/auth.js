import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import Cookies from 'js-cookie'

const state = {
  user: null,
  token: Cookies.get('token')
}

export default {
  state,
  getters,
  actions,
  mutations
}
