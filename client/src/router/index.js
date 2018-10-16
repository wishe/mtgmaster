import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Information from '@/components/Information';
import Login from '@/components/Login';
import Cards from '@/components/Cards';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: 'cards',
      name: 'Cards',
      component: Cards,
    },
    {
      path: '/information',
      name: 'Information',
      component: Information,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});

