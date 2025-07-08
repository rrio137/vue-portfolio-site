<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>>
</template>

<script>
import Navbar from './components/Navbar.vue'
//import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
