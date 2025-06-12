<script setup>
import GamesForm from '@/components/GamesForm.vue';
</script>

<template>
  <main>
    <h1>GAMES MANAGER</h1>
    <GamesForm></GamesForm>
  </main>
</template>

<style scoped>
main {
  width: auto;
  padding: 15px;
  margin-top: 3rem;
  margin-bottom: 3rem;
  margin-left: auto;
  margin-right: auto;
  color: whitesmoke;
  background-color: #0e0e27da;
}
@media (max-width: 1007px) {
  main {
    width:100%
  }
}
</style>