import api from '@/services/api'

export default {
  loginRequest(payload) {
    return api().post('/login', payload)
  }
}