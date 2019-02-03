import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
// import routes from './router'
import Login from '@/components/login/Login.vue'
import HttpRequest from '@/components/api/HttpRequest.vue'
import MyComponent from '@/components/MyComponent.vue'
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Router);

new Vue({
  render: h => h(App),
  router: new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: MyComponent
      },
      {
        path: '/login',
        component: Login
      },
      {
        path: '/http',
        component: HttpRequest
      }
    ]
  }),
}).$mount('#app')
//yarn add ...
