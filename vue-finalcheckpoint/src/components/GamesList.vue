<script setup>
import { ref, computed, defineProps, defineEmits} from 'vue';

const { games, deleteGame, completeGame, editGame } = defineProps({
  games: Array,
  deleteGame: Function,
  completeGame: Function,
  editGame: Function
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
      <tr v-for="game in filteredGames" :key="game.id" :class="{ completed: game.done }">
        <td>{{ game.gameName }}</td>
        <td>{{ game.gameCategory }}</td>
        <td>{{ game.metacriticScore }}</td>
        <td>{{ game.dedicationHours }}</td>
        <td>
        <div class="actions-btn">
          <button @click="completeGame(game.id)">✅</button>
          <button @click="editGame(game.id)">✏️</button>
          <button @click="deleteGame(game.id)">❌</button>
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
  margin-bottom: 5px;
  margin-top: 10px;
  padding: 10px;
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
</style>