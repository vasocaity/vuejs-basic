import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import { routerConst } from './router'
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Router);

new Vue({
  render: h => h(App),
  router: routerConst,
}).$mount('#app');
//yarn add ...
