// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Bootstrap from 'bootstrap-vue';
import App from './App';
import router from './routes';
import store from './store';
import AxiosPlugin from './global/axios-global';

/* Bootstrap style */
import 'bootstrap/dist/css/bootstrap.css'; /* eslint-disable-line */
import 'bootstrap-vue/dist/bootstrap-vue.css'; /* eslint-disable-line */
import './assets/sass/custom-style.scss';
import './assets/css/custom-style.css';

Vue.config.productionTip = false;

/* Use the plugins */
Vue.use(Bootstrap);
Vue.use(AxiosPlugin, '$axios');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
