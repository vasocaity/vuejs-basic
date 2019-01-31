import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
// import routes from './router'
import Login from '@/components/login/Login.vue'
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Router);

new Vue({
  render: h => h(App),
  router: new Router({
    routes: [
      {
        path: '/',
        name: 'Login',
        component: Login
      }
    ]
  }),
}).$mount('#app')
//yarn add ...
