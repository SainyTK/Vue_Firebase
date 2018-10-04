import Vue from 'vue'
import App from './App'
import router from './router'
import './components/firebaseInit'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;

firebase.auth().onAuthStateChanged(user => {
  if(!app){
    app = new Vue({
      el: '#app',
      router,
      render: h => h(App)
    })
  }
})

