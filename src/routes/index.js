import Vue from 'vue';
import Router from 'vue-router';

/* import own component */
import Login from '@/pages/auth/Login';
import Home from '@/pages/content/Home';

Vue.use(Router);

const homePage = {
  path: '/',
  name: 'homepage',
  component: Home,
};

const loginPage = {
  path: '/login',
  name: 'login',
  component: Login,
};

const indexRoutes = [
  homePage,
  loginPage,
];

export default new Router({
  mode: 'history',
  routes: indexRoutes,
});
