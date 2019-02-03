import Router from 'vue-router'
import Login from '@/components/login/Login.vue'
import MyComponent from '@/components/MyComponent.vue'
import User from '@/components/api/User.vue'
export default new Router({
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
      path: '/user/:id',
      component: User
    },
    {
      path: '/user/:username/post/:post_id',
      component: User
    },
    {
      //Catch all / 404 Not found Route
        // will match everything
        path: '*',
        component: Login
    }
  ]
})
