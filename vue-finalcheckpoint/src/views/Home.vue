<script setup>

</script>

<template>
    <main>
      <h1>¡BIENVENIDO A FINAL CHECKPOINT!</h1>
      <p>¿Cansado de no saber qué juego empezar dentro de tantas opciones?<br>¡Aquí tenemos la solución!</p>
      <h2>¿Cómo funciona?</h2>
      <p>Es muy simple, sólo necesitamos de los datos de tus juegos y te decimos qué juego debes elegir para finalmente alcanzar ese checkpoint final tan deseado.</p>
      <h2>¿Empezamos?</h2>
      <router-link to="/games" class="start-btn">START</router-link>
    </main>
</template>

<style scoped>
main {
  width: 100%;
  max-width: 700px;
  padding: 20px;
  margin: 3rem auto;
  color: whitesmoke;
  background-color: #0e0e27da;
  box-sizing: border-box;
}
.start-btn {
  display: inline-block;
  background-color: #e0b712;
  color: #0d0d2b;
  border: none;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
}
.start-btn:hover {
  background-color: #ffd700;
}
@media (max-width: 1007px) {
  main {
    flex: 1;
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>