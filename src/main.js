import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import { router } from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Router);
Vue.use(VueResource);
new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app');
//yarn add ...
