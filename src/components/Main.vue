<template>
    <div class="container">
        <div v-for="dev in devs" v-bind:key="dev.dev_id">
            <div class="col s12 m8 offset-m2 l6 offset-l3">
                <div class="card-panel grey lighten-5 z-depth-1">
                    <div class="row valign-wrapper">
                        <div class="col s2">
                            <img v-bind:src="dev.imageUrl" alt="" class="circle responsive-img">
                        </div>
                            <div class="col s10">
                                <span class="black-text">
                                    NAME: {{dev.name}} | POSITION: {{dev.position}}
                                </span>
                                <router-link v-bind:to="{ name: 'view-dev', params: { dev_id: dev.dev_id }}" class="btn right"> {{dev.name}} </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'main',
    data() {
        return {
            devs:[]
        }
    },
    created(){
        console.log("Created");
        
        db.collection('dev').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const dev = {
                    'dev_id': doc.data().dev_id,
                    'name': doc.data().name,
                    'imageUrl': doc.data().imageUrl,
                    'position': doc.data().position,
                    'message': doc.data().message,
                    'like': doc.data().like,
                }
                this.devs.push(dev)
            })
        })
    }
}
</script>

<style scoped>
.container:first-child {
  margin-top: 50px;
}
</style>
