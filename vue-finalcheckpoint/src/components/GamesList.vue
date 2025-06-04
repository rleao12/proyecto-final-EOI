<script setup>
import { defineProps } from 'vue';

defineProps({
  games: Array,
  deleteGame: Function,
  completeGame: Function,
  editGame: Function
})

</script>

<template>
<div class="game-list">
  <h2>LISTA DE JUEGOS</h2>
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
      <tr v-for="game in games" :key="game.id">
        <td>{{ game.gameName }}</td>
        <td>{{ game.gameCategory }}</td>
        <td>{{ game.metacriticScore }}</td>
        <td>{{ game.dedicationHours }}</td>
        <td class="actions-btn">
        <button @click="completeGame(game.id)">✅</button>
        <button @click="editGame(game.id)">✏️</button>
        <button @click="deleteGame(game.id)">❌</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

</template>

<style scoped>
.game-table {
  color: #ffffff;
  width: 100%;
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
}

tbody {
  color: whitesmoke;
}

.actions-btn {
  display:inline-flex;
  align-items: center;
  gap: 1rem;
}
</style>