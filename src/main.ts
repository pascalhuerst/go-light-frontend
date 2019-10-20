import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import store from './store/index';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faThList, faCogs } from '@fortawesome/free-solid-svg-icons';

import FixtureDefails from './components/FixtureDetails.vue';

library.add(faThList, faCogs);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

// Vue.prototype.$serverUrl = window.location.protocol + '//' + '192.168.1.100:8081';
// Vue.prototype.$serverUrl = window.location.protocol + '//' + window.location.hostname + ':8081';

const routes = [
  { path: '/', component: FixtureDefails },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});
Vue.use(VueRouter);
Vue.use(BootstrapVue);

// store.dispatch('deviceState/connectDeviceInfo');

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

