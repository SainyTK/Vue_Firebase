<template>
  <div id="app">
    <NavBar />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Profile from './components/Profile'
export default {
  name: 'App',
  components: {
    NavBar,
    Profile
  }
}
</script>
