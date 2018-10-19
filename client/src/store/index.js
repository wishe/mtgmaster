import Vue from 'vue'
import vuex from 'vuex'
import modules from './modules'

Vue.use(vuex)

const store = new vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production'
})

for(const moduleName of Object.keys(modules)) {
  if(modules[moduleName].actions.init) {
    store.dispatch(`{moduleName}/init`)
  }
}

export default store