import Router from 'vue-router'
import Login from '@/components/login/Login.vue'
import MyComponent from '@/components/MyComponent.vue'
import User from '@/components/user/User.vue'
import UserProfile from '@/components/user/UserProfile.vue'
import UserSettings from '@/components/user/UserSettings.vue'
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MyComponent
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/user',
      component: User,
      name: 'user',
      children: [
        {
          path: 'post/:post_id',
          component: User
        },
      ]
    },
    {
      path: '/name-view',
      component: User,
      children: [
        {
          path: 'profile',
          components: {
            default: UserProfile,
            helper: UserSettings
          } 
        }
      ]
    },
    {
      //Catch all / 404 Not found Route
      // will match everything
      path: '*',
      component: Login
    }
  ]
})
