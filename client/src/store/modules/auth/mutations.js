import * as types from '@/store/types'
import Cookies from 'js-cookie'


export default {
  [types.LOGIN_SUCCESS] (state, { data }) {
    state.user = data.user
    state.token = data.token
    Cookies.set('token', data.token, { expires: null })
  },
  [types.LOGIN_FAILED] (state) {
    state.user = null
    state.token = null
  },
  [types.LOGOUT_SUCCESS] (state) {
    state.user = null
    state.token = null
    Cookies.remove('token')
  },
  [types.REGISTER_SUCCESS] (state, { data }) {
    state.user = data.user
    state.token = data.token
    Cookies.set('token', data.token, { expires: null })
  },
  [types.REGISTER_FAILED] (state) {
    state.user = null
  },
  [types.FETCH_USER_SUCCESS] (state, { user }) {
    state.user = user
  },
  [types.FETCH_USER_FAILED] (state) {
    state.user = null
  }
}
