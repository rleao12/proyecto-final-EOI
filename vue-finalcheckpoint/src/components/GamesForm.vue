<script setup>
import { ref } from 'vue'
import { useStorage } from '@vueuse/core';
import GamesList from './GamesList.vue';

const games = useStorage("games", [

])

const newGame = ref({
  gameName: '',
  gameCategory: '',
  metacriticScore: '',
  dedicationHours: ''
})

function generateId() {
  return Math.random().toString(36).substr(2, 8); 
}

function addNewGame() {
  const gameObject = {
    id: generateId(),
    done: false,
    gameName: newGame.value.gameName,
    gameCategory: newGame.value.gameCategory,
    metacriticScore: newGame.value.metacriticScore,
    dedicationHours: newGame.value.dedicationHours,
  }
  games.value.push(gameObject)
}


function completeGame(id) {

}

function editGame(id) {

}

function deleteGame(id) {
  const index = games.value.findIndex(game => game.id === id)
  if (index === -1) return
    games.value.splice(index, 1)
}

</script>

<template>
<form class="form" @submit.prevent="">
    <div class="form-group">
      <label>Nombre del juego</label>
      <input id="game-name" v-model="newGame.gameName" placeholder="Escriba el nombre del juego" type="text" required />
    </div>

    <div class="form-group">
      <label>Categoría</label>
      <select id="game-category" v-model="newGame.gameCategory" required>
        <option disabled value>Selecciona una categoría</option>
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
      <input id="metacritic-score" v-model.number="newGame.metacriticScore" placeholder="Pon la puntuación" type="number" min="0" max="10" step="0.1" required />
    </div>

    <div class="form-group">
      <label>Horas de dedicación</label>
      <input id="dedication-hours" v-model.number="newGame.dedicationHours" placeholder="Pon las horas" type="number" min="0" required />
    </div>

    <button class="submit-btn" type="submit" @click="addNewGame">ENVIAR</button>
</form>
<GamesList :games="games" :deleteGame="deleteGame" :completeGame="completeGame" :editGame="editGame" />

</template>

<style scoped>
.form {
  max-width: auto;
  margin: 2rem auto;
  padding: 1.5rem;
  border: 1px solid #f1c40f;
  border-radius: 10px;
  color: #f1c40f;
  display: inline-flex;
  margin-bottom: 0;
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