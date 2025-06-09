<script setup>
import { ref, computed, defineProps} from 'vue';

const { games, deleteGame, completeGame, editGame } = defineProps({
  games: Array,
  deleteGame: Function,
  completeGame: Function,
  editGame: Function,
});


const selectedCategory = ref('Todas');
const filteredGames = computed(() => {
  if (selectedCategory.value === 'Todas') return games;
  return games.filter(game => game.gameCategory === selectedCategory.value);
});
</script>

<template>
<div class="game-list">
  <div class="listHeadings">
    <h2>LISTA DE JUEGOS</h2>
    <filter> FILTRAR POR CATEGORÍA
      <select v-model="selectedCategory" required>
        <option disabled value="">Selecciona una categoría</option>
        <option>Todas</option>
        <option>Aventura</option>
        <option>Acción</option>
        <option>Combate</option>
        <option>RPG</option>
        <option>Shooter</option>
        <option>Deporte</option>
        <option>Carrera</option>
        <option>Otra</option>
      </select>
    </filter>
  </div>
  <table class="game-table">
    <thead>
      <tr>
        <th>NOMBRE DEL JUEGO</th>
        <th>CATEGORÍA</th>
        <th>METACRITIC</th>
        <th>HORAS</th>
        <th>ACCIONES</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="game in filteredGames" :key="game.id">
        <td :class="{ completed: game.done }">{{ game.gameName }}</td>
        <td :class="{ completed: game.done }">{{ game.gameCategory }}</td>
        <td :class="{ completed: game.done }">{{ game.metacriticScore }}</td>
        <td :class="{ completed: game.done }">{{ game.dedicationHours }}</td>
        <td :class="{ 'completed-bg': game.done }">
        <div class="actions-btn">
          <button @click="completeGame(game.id)" :disabled="game.done">✅</button>
          <button @click="editGame(game.id)">✏️</button>
          <button @click="deleteGame(game.id)">❌</button>
        </div>
        <div class="completion-date" :style="{ visibility: game.completedAt ? 'visible' : 'hidden' }">Completado el {{ new Date(game.completedAt).toLocaleDateString() }}
        </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<style scoped>
.listHeadings {
  color: #f1c40f;
  font-weight: bold;
  display: flex;
  justify-content:space-between;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
.game-table {
  color: #ffffff;
  width: 100%;
  border-collapse: collapse;
}
thead {
  background: #745732a6;
  color: #bcbe12;
}
th {
  padding: 0.3rem;
  font-size: 1rem;
  letter-spacing: 3px;
}
td {
  padding: 0.7rem;
  height: 55px;
}
tbody {
  color: whitesmoke;
}
tbody tr {
  border-bottom: 1px solid #ccc;
}

.actions-btn {
  display:flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 100%;
}
.completed {
  background-color: #2a2a2a;
  color: #777; 
  text-decoration: line-through;
  opacity: 0.7;
}
.completion-date {
  font-size: 0.70rem;
  color: #2ab818;
  text-align: center;
}
.completed-bg {
  background-color: #2a2a2a;
  opacity: 0.7;
}
</style>