import * as types from '@/store/types'
import authApi from '@/services/api/auth'

export default {
  loginUser({ commit }, { credentials }) {
    return new Promise((resolve, reject) => {
      return authApi.loginRequest(credentials)
      .then(res => {
        commit(types.LOGIN_SUCCESS, { user: res.data })
        resolve()
      })
      .catch(() => {
        commit(types.LOGIN_FAILED)
        reject()
      })
      .finally(() => {
  
      })
    })
    
  }
}
