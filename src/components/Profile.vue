<template>
    <div id="profile-container">
        <div class="container">
            <h3>Profile</h3>
            <div class="col s12 m8 offset-m2 l6 offset-l3">
                <div class="card-panel grey lighten-5 z-depth-1">
                    <div class="row valign-wrapper">
                        <div class="col s5 ">
                            <img src="../assets/dev1.jpg" alt="" class="responsive-img z-depth-1"> <!-- notice the "circle" class -->
                            <div class="row">
                                <div class="col s8">
                                    <br>
                                    <button class="btn">{{like}} likes</button>
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
            <router-link to="/" class="btn purple">Back</router-link>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: "Profile",
    data: function () {
        return {
            dev_id: null,
            name: null,
            position: null,
            dob: null,
            message: null,
            like: null,
        }
    },
    beforeRouteEnter: function (to, from, next) {
        db.collection('dev').where('dev_id', '==', to.params.dev_id).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                next(p => {
                    p.dev_id = doc.data().dev_id
                    p.name = doc.data().name
                    p.position = doc.data().position
                    p.message = doc.data().message
                    p.like = doc.data().like
                })
            })
        })
    },
    methods: {
        fetchData: function () {
            db.collection('dev').where('dev_id', '==', to.params.dev_id).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.dev_id = doc.data().dev_id
                    this.name = doc.data().name
                    this.position = doc.data().position
                    this.message = doc.data().message
                    this.like = doc.data().like
                })
            })
        }
    },
    watch: {
        '$route': 'fetchData'
    }
};
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