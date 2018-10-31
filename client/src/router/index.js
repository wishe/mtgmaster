import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import Home from '@/pages/Home'
import Information from '@/pages/static/Information'
import Login from '@/pages/auth/Login'
import Register from '@/pages/auth/Register'
import Cards from '@/pages/cards/Cards'
import Decks from '@/pages/decks/Decks'
import Draftbuilder from '@/pages/draftbuilder/Draftbuilder'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: 'cards',
      name: 'Cards',
      component: Cards
    },
    {
      path: 'decks',
      name: 'Decks',
      component: Decks
    },
    {
      path: 'draftbuilder',
      name: 'Draftbuilder',
      component: Draftbuilder
    },
    {
      path: '/information',
      name: 'Information',
      component: Information
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})

export default router

router.beforeEach(async function (to, from, next) {
  if (!store.getters['auth/check'] && store.getters['auth/token']) {
    await store.dispatch('auth/fetchUser')
  }
  next()
})

router.beforeEach(async function (to, from, next) {
  if (to.path !== '/login' && to.path !== '/register' && to.path !== '/') {
    if (!store.getters['auth/check']) {
      next({ name: 'Login' })
    }
  } else if (to.path === '/login' || to.path === '/register') {
    if (store.getters['auth/check']) {
      next({ name: 'Cards' })
    }
  }
  next()
})