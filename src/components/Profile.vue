<template>
    <div id="profile-container">
        <div class="container">
            <h3>Profile</h3>
            <div class="col s12 m8 offset-m2 l6 offset-l3">
                <div class="card-panel grey lighten-5 z-depth-1">
                    <div class="row valign-wrapper">
                        <div class="col s5 ">
                            <img v-bind:src="imageUrl" alt="" class="responsive-img z-depth-1"> <!-- notice the "circle" class -->
                            <div class="row">
                                <div class="col s5">
                                    <button class="btn" @click="clickLike">{{like}} likes</button>
                                </div>
                            </div>
                        </div>
                        <div class="col s10">
                            <span class="black-text">
                                <h3 class="margin-0">{{name}}</h3>
                                <p class="font-18 margin-bottom-0">Position : {{position}}</p>
                                <br>
                                <p class="font-18 margin-bottom-0">
                                    {{message}}
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
                <!-- <div class="row">
                    <div class="col s12"> -->
                        <router-link to="/"><button class="btn purple">Back</button></router-link>
                    <!-- </div>
                </div> -->
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: "view-dev",
    data() {
        return {
            dev_id: null,
            name: null,
            imageUrl:null,
            position: null,
            message: null,
            like: null,
        }
    },
    beforeRouteEnter(to, from, next) {
        console.log("params = " + to.params.dev_id);
        db.collection('dev').where('dev_id', '==', to.params.dev_id).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                next(p => {
                    p.dev_id = doc.data().dev_id
                    p.name = doc.data().name
                    p.imageUrl = doc.data().imageUrl
                    p.position = doc.data().position
                    p.message = doc.data().message
                    p.like = doc.data().like
                })
            })
        })
            

    },
    watch: {
        $route: 'fetchData'
    },
    methods: {
        fetchData() {
            db.collection('dev').where('dev_id', '==', this.$route.params.dev_id).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.dev_id = doc.data().dev_id
                    this.name = doc.data().name
                    this.imageUrl = doc.data().imageUrl
                    this.position = doc.data().position
                    this.message = doc.data().message
                    this.like = doc.data().like
                })
            })
        },
        clickLike(){
            this.like++
            db.collection('dev').where('dev_id','==',this.$route.params.dev_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    doc.ref.update({
                        like : this.like
                    }).then(()=>{
                        console.log("Add like");
                    }).catch((err)=>{
                        console.log(err.message);
                    })
                })
            })
        }
    },
}
</script>

<style>
.margin-0 {
  margin-top: 0;
}
.margin-bottom-0 {
  margin: 0;
  line-height: 1.7;
}
.font-18 {
  font-size: 18px;
}
</style>