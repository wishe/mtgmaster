import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import Home from '@/components/Home'
import Information from '@/components/Information'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Cards from '@/components/Cards'

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
  // If no auth check redirect login
  // if no auth check but token, fetch user and move on
  // If no auth check and no token, redirect to login
  next()
})

router.beforeEach(async function (to, from, next) {
  if (to.path !== '/login' && to.path !== '/register') {
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