<script setup>
import { computed, watch, ref, defineProps, defineEmits } from 'vue';
const props = defineProps({ games: Array });
const emit = defineEmits(['priorized']);

const priorizeTriggered = ref(false); 

const hasValidGames = computed(() => {
  return props.games.some(game => !game.done && game.dedicationHours > 0);
});

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

function handleClickPriorize() {
  priorizeTriggered.value = true;
  usePriorize();
}

watch(
  () => props.games.map(game => ({
    id: game.id,
    done: game.done,
    dedicationHours: game.dedicationHours,
    metacriticScore: game.metacriticScore
  })),
  () => {
    if (priorizeTriggered.value) {
      usePriorize();
    }
  },
  { deep: true }
);
</script>

<template>
<button class="priorize-btn" @click="handleClickPriorize" :disabled="!hasValidGames" :class="{ 'is-disabled': !hasValidGames }"
>✨ PRIORIZAR JUEGO ✨</button>
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
  box-shadow: 0 0 10px #ffd900;
}

.priorize-btn:hover {
  background-color: #ffd700;
}

.priorize-btn.is-disabled {
  background-color: #e0b7126c;
  color: #414040;
  box-shadow: none;
  cursor: not-allowed;
  pointer-events: none;
}
</style>