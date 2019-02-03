import Router from 'vue-router'
import Login from '@/components/login/Login.vue'
import MyComponent from '@/components/MyComponent.vue'
import User from '@/components/user/User.vue'
import UserProfile from '@/components/user/UserProfile.vue'
import UserSettings from '@/components/user/UserSettings.vue'

const routes = [
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
    // beforeEnter: (to, from, next) => {
    //   // ...
    // },
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
  },
  {
    path: '/a',
    component: UserProfile,
    // alias: '/b'
  },
  {
    path: '/b',
    component: UserSettings,
    // alias: '/b'
  },
  {
    path: '/a',
    redirect: '/b'
  }
];

export const routerConst = new Router({
  mode: 'history',
  routes // short for routes: routes
})

// Global BEFORE hooks:
routerConst.beforeEach((to, from, next) => {
  // console.log('Global -- beforeEach - fired')
  
  // re-route
  if (to.path === '/a') {
    next('/')
  } 
  // Abort navigation based on some criteria:
  // else if (to.path === '/user/1') {
  //   next(false)
  // } 
  else if (to.path === '/error') {
    const err = new Error('My Error Message')
    
    // pass the error to onError() callback.
    next(err)
  }
  else {
    next()
  }
})
