<script setup>
const props = defineProps({ games: Array });
const emit = defineEmits(['priorized']);

function usePriorize() {
  const validGames = props.games.filter(game => !game.done && game.dedicationHours > 0);
  const prioritizedGames = [...validGames].sort((a, b) => {
    const priorityA = a.metacriticScore / a.dedicationHours;
    const priorityB = b.metacriticScore / b.dedicationHours;
    return priorityB - priorityA;
  });
  const topGame = prioritizedGames[0] || null;
  emit('priorized', topGame);
}
</script>

<template>
<button class="priorize-btn" @click="usePriorize">✨ PRIORIZAR JUEGO ✨</button>
</template>

<style scoped>
.priorize-btn {
  display: flexbox;
  margin-top: 2rem;
  padding: 0.7rem 0.7rem;
  border: none;
  border-radius: 10px;
  background-color: #e0b712;
  color: #0d0d2b;
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  width: auto;
  height: 60px;
  align-items: center;  
  justify-content: center;
}
 
</style>