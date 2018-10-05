import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '@/components/SignUp'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Profile from '@/components/Profile'
import firebase from 'firebase'
import dev1 from '@/components/dev1'
import dev2 from '@/components/dev2'
import dev3 from '@/components/dev3'

Vue.use(Router)

let router = new Router({
  routes: [{
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
      meta: {
        requiresGuest: true,
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requiresGuest: true,
      }
    },
    {
      path: '/',
      name: 'Main',
      component: Main,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/dev1',
      name: 'dev1',
      component: dev1,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/dev2',
      name: 'dev2',
      component: dev2,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/dev3',
      name: 'dev3',
      component: dev3,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/profile/:dev_id',
      name: 'view-dev',
      component: Profile,
      props: true,
      meta: {
        requiresAuth: true,
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!firebase.auth().currentUser) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (firebase.auth().currentUser) {
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  }
})

export default router;
