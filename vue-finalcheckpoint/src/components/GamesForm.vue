<script setup>
import { ref, computed } from 'vue'
import GamesList from './GamesList.vue';
import PriorizeBtn from './PriorizeBtn.vue';
import { useGamesStore } from '@/stores/gamesStore';
import { onMounted } from 'vue';

const gamesStore = useGamesStore()

const games = computed(() => {
  return gamesStore.games
})
const editingId = ref(null) 
const isEditing = computed(() => editingId.value !== null)

const newGame = ref({
  gameName: '',
  gameCategory: '',
  metacriticScore: null,
  dedicationHours: null,
  completedAt: '',
  gamePriority: null
})

async function addNewGame() {
  const gameObject = {
    completed: false,
    title: newGame.value.gameName,
    game_category: newGame.value.gameCategory,
    metacritic_score: newGame.value.metacriticScore,
    dedication_hours: newGame.value.dedicationHours,
    game_priority: newGame.value.metacriticScore / newGame.value.dedicationHours
  }
  await gamesStore.createGame(gameObject)
}

function getGameToEdit(id) {
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

async function editGame() {
  const editingGame = games.value.find(g => g.id === editingId.value)
    if (editingGame) {
      const updatedGame = {
      title: newGame.value.gameName,
      game_category: newGame.value.gameCategory,
      metacritic_score: newGame.value.metacriticScore,
      dedication_hours: newGame.value.dedicationHours,
      game_priority: newGame.value.metacriticScore / newGame.value.dedicationHours
    }
    await gamesStore.editGame(editingId.value, updatedGame)
    editingId.value = null
}
}

function addOrEditGame() {
  if (editingId.value) {
    editGame()
  } else {
    addNewGame()
  }
  newGame.value = {
    gameName: '',
    gameCategory: '',
    metacriticScore: '',
    dedicationHours: ''
  }
}

async function completeGame(id) {
  const game = games.value.find(game => game.id === id);
  if (game) {
    game.completed = true;
    game.completedAt = new Date().toISOString();
  }
  await gamesStore.markAsCompleted(id)
}

const sortedGames = computed(() => {
return [...games.value].sort((a, b) => a.completed - b.completed);
});

async function deleteGame(id) {
  const index = games.value.findIndex(game => game.id === id)
  if (index === -1) return
    games.value.splice(index, 1)
  await gamesStore.removeGame(id)
}

const prioritizedGame = ref(null);
function handlePriorized(game) {
  prioritizedGame.value = game;
}

const filteredGamesFromGamesList = ref([])
function handleFiltered(newFiltered) {
  filteredGamesFromGamesList.value = newFiltered
}

onMounted(() => {
gamesStore.loadGames()
})

</script>

<template>
<form class="form" @submit.prevent="addOrEditGame">
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
      <input id="metacritic-score" v-model.number="newGame.metacriticScore" placeholder="Añade la puntuación" type="number" min="0" max="100" step="0.1" required />
    </div>

    <div class="form-group">
      <label>Horas de dedicación</label>
      <input id="dedication-hours" v-model.number="newGame.dedicationHours" placeholder="Añade las horas" type="number" min="0.1" step="0.1" required />
    </div>

    <button class="submit-btn" type="submit">
      {{ isEditing ? 'GUARDAR' : 'AÑADIR' }}
    </button>
</form>
<GamesList :games="sortedGames" :deleteGame="deleteGame" :completeGame="completeGame" :getGameToEdit="getGameToEdit" @filtered="handleFiltered"/>
<PriorizeBtn :games="filteredGamesFromGamesList" @priorized="handlePriorized" />
<div v-if="prioritizedGame" class="prioritized-highlight">
  <h3>🎯 JUEGO PRIORITARIO:</h3>
  <p>{{ prioritizedGame.gameName }} ({{ prioritizedGame.gameCategory }})</p>
  <h3> ¡A POR EL FINAL CHECKPOINT! 🏆</h3>
</div>
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
.prioritized-highlight h3,
.prioritized-highlight p {
  margin: 0 0.5rem;
  align-items: center;
  line-height: 1.2;
 
}
.prioritized-highlight {
  display: flex;
  background-color:#e0b712;
  padding: 1rem;
  margin-top: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px #ffd900;
  color: #0d0d2b;
  font-weight: bold;
  font-size: 1rem;
  width: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
}
</style>