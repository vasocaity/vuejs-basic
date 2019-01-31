import Router from 'vue-router'
import Login from '@/components/login/Login.vue'
export default new Router({
    routes: [
      {
        path: '/',
        name: 'Login',
        component: Login
      }
    ]
  })
