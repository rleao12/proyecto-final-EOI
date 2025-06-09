<script setup>
import '../src/assets/css/main.css'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="app">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>


