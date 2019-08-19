import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import Home from '@/pages/Home'
import Settings from '@/pages/settings/Settings';
import Login from '@/pages/auth/Login'
import Register from '@/pages/auth/Register'
import Cards from '@/pages/cards/Cards'
import DecksIndex from '@/pages/decks/index'
import MyDecks from '@/pages/decks/mine'
import PlaygroupDecks from '@/pages/decks/playgroup'
import Draftbuilder from '@/pages/draftbuilder/Draftbuilder'
import Playgroup from '@/pages/playgroup/Playgroup'

import NotFound from '@/pages/NotFound'

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
      path: '/cards',
      name: 'Cards',
      component: Cards
    },
    {
      path: '/decks',
      component: DecksIndex,
      children: [
        {
          path: '',
          component: MyDecks
        },
        {
          path: 'mine',
          name: 'MyDecks',
          component: MyDecks
        },
        {
          path: 'playgroup',
          name: 'PlaygroupDecks',
          component: PlaygroupDecks
        }
      ]
    },
    {
      path: 'draftbuilder',
      name: 'Draftbuilder',
      component: Draftbuilder
    },
    {
      path: 'playgroup',
      name: 'Playgroup',
      component: Playgroup
    },
    {
      path: 'settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: 'login',
      name: 'Login',
      component: Login
    },
    {
      path: 'register',
      name: 'Register',
      component: Register
    },
    { 
      path: '*', 
      component: NotFound 
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
  if (to.path !== 'login' && to.path !== 'register' && to.path !== '/') {
    if (!store.getters['auth/check']) {
      next({ name: 'Login' })
    }
  } else if (to.path === 'login' || to.path === 'register') {
    if (store.getters['auth/check']) {
      next({ name: 'Cards' })
    }
  }
  next()
})