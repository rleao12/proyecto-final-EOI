<script setup>
import '../src/assets/css/main.css'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="app-wrapper">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

