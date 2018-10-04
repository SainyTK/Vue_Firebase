<template>
  <div id="app">
    <NavBar/>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  name: 'App',
  components:{
    NavBar
  },
}
</script>
