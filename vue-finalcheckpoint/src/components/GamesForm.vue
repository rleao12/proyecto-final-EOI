<script setup>
import { ref, computed } from 'vue'
import { useStorage } from '@vueuse/core';
import GamesList from './GamesList.vue';

const games = useStorage("games", [])
const editingId = ref(null) 
const isEditing = computed(() => editingId.value !== null)

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
  if (editingId.value) {
    const game = games.value.find(game => game.id === editingId.value)
    if (game) {
      game.gameName = newGame.value.gameName
      game.gameCategory = newGame.value.gameCategory
      game.metacriticScore = newGame.value.metacriticScore
      game.dedicationHours = newGame.value.dedicationHours
    }
    editingId.value = null
  } else {
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
  newGame.value = {
    gameName: '',
    gameCategory: '',
    metacriticScore: '',
    dedicationHours: ''
  }
}

function completeGame(id) {
  const game = games.value.find(game => game.id === id);
  if (game) {
    game.done = !game.done;
  }
}

const sortedGames = computed(() => {
  return [...games.value].sort((a, b) => a.done - b.done);
});

function editGame(id) {
  const game = games.value.find(game => game.id === id)
  if (game) {
    newGame.value = {
      gameName: game.gameName,
      gameCategory: game.gameCategory,
      metacriticScore: game.metacriticScore,
      dedicationHours: game.dedicationHours
    }
    editingId.value = id
  }
}

function deleteGame(id) {
  const index = games.value.findIndex(game => game.id === id)
  if (index === -1) return
    games.value.splice(index, 1)
}
</script>

<template>
<form class="form" @submit.prevent="addNewGame">
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
        <option>Deporte</option>
        <option>Carrera</option>
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

    <button class="submit-btn" type="submit">
      {{ isEditing ? 'GUARDAR' : 'AÑADIR' }}
    </button>
</form>
<GamesList :games="sortedGames" :deleteGame="deleteGame" :completeGame="completeGame" :editGame="editGame" />

</template>

<style scoped>
.form {
  max-width: auto;
  margin: auto;
  padding: 1rem;
  border: 1px solid #f1c40f;
  border-radius: 10px;
  color: #f1c40f;
  display: flex;
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

input, select {
  width: 190px;
  padding: 0.5rem;
  border: 1px;
  border-radius: 4px;
}

.submit-btn {
  display: flex;
  margin: auto;
  padding: 0.7rem 0.7rem;
  border: none;
  border-radius: 10px;
  background-color: #e0b712;
  color: #0d0d2b;
  font-size: 0.7rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  width: 70px;
  height: 40px;
  align-items: center;  
  justify-content: center;
}

.submit-btn:hover {
  background-color: #ffd700;
}
</style>