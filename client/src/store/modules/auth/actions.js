import * as types from '@/store/types'
import authApi from '@/services/api/auth'

export default {
  loginUser({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      return authApi.loginRequest(credentials)
      .then(res => {
        commit(types.LOGIN_SUCCESS, { data: res.data })
        resolve()
      })
      .catch(() => {
        commit(types.LOGIN_FAILED)
        reject()
      })
      .finally(() => {
      
      })
    })
  },
  async logoutUser({ commit }) {
    await commit(types.LOGOUT_SUCCESS)
  },
  registerUser({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      return authApi.registerRequest(credentials)
      .then(res => {
        commit(types.REGISTER_SUCCESS, { data: res.data })
        resolve()
      })
      .catch(() => {
        commit(types.REGISTER_FAILED)
        reject()
      })
      .finally(() => {

      })
    })
  },
  fetchUser({ commit }) {
    return new Promise((resolve, reject) => {
      return authApi.userRequest()
      .then(res => {
        commit(types.FETCH_USER_SUCCESS, res.data)
        resolve()
      })
      .catch(() => {
        commit(types.FETCH_USER_FAILED)
        reject()
      })
      .finally(() => {

      })
    })
  }
}
