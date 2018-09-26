import Vue from 'vue';
import Router from 'vue-router';

/* import own component */
import Login from '@/pages/auth/Login';
import Home from '@/pages/content/Home';
import HomeLayout from '@/components/layouts/HomeLayout';

Vue.use(Router);

const homePage = {
  path: '/',
  component: HomeLayout,
  redirect: '/',
  children: [
    {
      path: '',
      name: 'Home',
      component: Home,
    },
  ],
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
