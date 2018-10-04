<template>
    <div id="profile-container">
        <div class="container">
            <h3>Profile</h3>
            <div class="row">
                <div class="col s12 m6">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title"> Developer: TAnakorn</span>
                            <ul>
                                <li v-for="item in namelist" :key="item.id">
                                    <p>{{item.name}}</p>
                                </li>
                            </ul>
                        </div>
                        <div class="card-action">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'dev1'
}
</script>

