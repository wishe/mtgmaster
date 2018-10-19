import * as types from '@/store/types'

export default {
  [types.LOGIN_SUCCESS] (state, { user }) {
    state.user = user
  },
  [types.LOGIN_FAILED] (state) {
    state.user = {}
  }
}
