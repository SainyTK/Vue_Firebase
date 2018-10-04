import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '@/components/SignUp'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Profile from '@/components/Profile'
import firebase from 'firebase'

Vue.use(Router)

let router =  new Router({
  routes: [
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
      meta:{
        requiresGuest:true,
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta:{
        requiresGuest:true,
      }
    },
    {
      path: '/',
      name: 'Main',
      component: Main,
      meta:{
        requiresAuth:true,
      }
    },
    {
      path: '/profile/:id',
      name: 'Profile',
      component: Profile,
      meta:{
        requiresAuth:true,
      }
    }
  ]
})

router.beforeEach((to,from,next)=>{
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!firebase.auth().currentUser){
      next({
        path:'/login',
        query:{
          redirect:to.fullPath
        }
      })
    }
    else{
      next()
    }
  }
  else if(to.matched.some(record => record.meta.requiresGuest)){
    if(firebase.auth().currentUser){
      next({
        path:'/',
        query:{
          redirect:to.fullPath
        }
      })
    }
    else{
      next()
    }
  }
})

export default router;