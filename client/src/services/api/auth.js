import api from '@/services/api'

export default {
  loginRequest(payload) {
    return api().post('/login', payload)
  },
  registerRequest(payload) {
    return api().post('/register', payload)
  },
  userRequest() {
    return api().get('/user')
  }
}