import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'
import { store } from './store/store';
import { routes } from "./routes";
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueGoogleMaps, {
  key: ''
})

const router = new VueRouter ({
  routes,
  mode: 'history'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
