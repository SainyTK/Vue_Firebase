<template>
    <nav v-if="isLoggedIn" >
        <div class="nav-wrapper purple">
            <div class="container">
                <router-link to="/" class="brand-logo">Vue + Firebase</router-link>
                <ul class="right">
                    <li v-if="isLoggedIn"><span class="white-text email">Welcome, {{email}}</span></li>
                    <li v-if="isLoggedIn"><button @click="logout" class="btn pink">Logout</button></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import firebase from 'firebase'
export default {
    name:'nav',
    data:function(){
        return{
            isLoggedIn:false,
            email:"",
            appName:""
        }
    },
    created:function(){
        firebase.auth().onAuthStateChanged(user=>{
             if(firebase.auth().currentUser){
                this.isLoggedIn = true
                this.email = firebase.auth().currentUser.email
            }else{
                this.isLoggedIn = false
                this.email = ""
            }
        })
       
    },
    methods:{
        logout:function(){
            firebase.auth().signOut().then(user=>{
                this.$router.push('/login')
            })
            
            e.preventDefault()
        }
    }
}
</script>

<style>
    .email{
        padding-right:20px;
    }
</style>
