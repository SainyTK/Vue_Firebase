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
import dev3 from './components/dev3'
export default {
  name: 'App',
  components: {
    NavBar,
    Profile,
    dev3
  }
}
</script>
