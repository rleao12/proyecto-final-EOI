<script setup>
import { ref } from 'vue'

const form = ref({
  gameName: '',
  gameCategory: '',
  metacriticScore: null,
  dedicationHours: null,
})

</script>

<template>
  
  <main>
    <h1>GAMES MANAGER</h1>
    <form class="form">
    <div class="form-group">
      <label>Nombre del juego</label>
      <input id="game-name" v-model="form.gameName" placeholder="Escriba el nombre del juego" type="text" required />
    </div>

    <div class="form-group">
      <label>Categoría</label>
      <select id="game-category" v-model="form.gameCategory" required>
        <option disabled value="">Selecciona una categoría</option>
        <option>Aventura</option>
        <option>Acción</option>
        <option>Combate</option>
        <option>RPG</option>
        <option>Shooter</option>
        <option>Esporte</option>
        <option>Corrida</option>
        <option>Otra</option>
      </select>
    </div>

    <div class="form-group">
      <label>Puntuación Metacritic</label>
      <input id="metacritic-score" v-model.number="form.metacriticScore" placeholder="Pon la puntuación" type="number" min="0" max="10" required />
    </div>

    <div class="form-group">
      <label>Horas de dedicación</label>
      <input id="dedication-hours" v-model.number="form.dedicationHours" placeholder="Pon las horas" min="0" required />
    </div>

    <button class="submit-btn" type="submit">ENVIAR</button>
  </form>

  </main>
</template>

<style scoped>
main {
  width: auto;
  flex: 1;
  padding: 15px;
  margin-top: 3rem;
  margin-bottom: 3rem;
  margin-left: auto;
  margin-right: auto;
  color: whitesmoke;
  background-color: #0e0e27da;
}

.form {
  max-width: auto;
  margin: 2rem auto;
  padding: 1.5rem;
  border: 1px solid #f1c40f;
  border-radius: 10px;
  color: #f1c40f;
  display: inline-flex;
 
}

.form-group {
  margin-bottom: 1rem;
  margin-right: 2rem;

}

label {
  display: block;
  margin-bottom: 0.4rem;
  font-weight: bold;
}

input,
select {
  width: 190px;
  padding: 0.5rem;
  border: 1px;
  border-radius: 4px;
}

.submit-btn {
  padding: 0.5rem 0.5rem;
  border: none;
  border-radius: 10px;
  background-color: #e0b712;
  color: #0d0d2b;
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;

}

.submit-btn:hover {
  background-color: #ffd700;
}
</style>