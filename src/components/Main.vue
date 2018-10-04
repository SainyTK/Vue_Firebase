<template>
    <div class="container">
        <div v-for="n in namelist" v-bind:key="n.id">
            <div class="col s12 m8 offset-m2 l6 offset-l3">
                <div class="card-panel grey lighten-5 z-depth-1">
                    <div class="row valign-wrapper">
                        <div class="col s2">
                            <img src="../assets/logo.png" alt="" class="circle responsive-img">
                        </div>
                            <div class="col s10">
                                <span class="black-text">
                                    NAME: {{n.name}} | ROLE: {{n.role}}
                                </span>
                                <router-link v-bind:to="{name:'view-dev', params:{dev_id: n.id}}" class="btn right"> {{n.name}} </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'main',
    data: function () {
        return {
            namelist: [
                {
                    id: 1,
                    name: 'Tanakorn',
                    role: 'Developer'
                },
                {
                    id: 2,
                    name: 'Mudasay',
                    role: 'Gammer'
                },
                {
                    id: 3,
                    name: 'Phirathat',
                    role: 'Developer'
                }
            ]
        }
    }
}
</script>

<style scoped>
.container:first-child {
  margin-top: 50px;
}
</style>
