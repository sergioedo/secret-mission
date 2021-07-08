<template>
  <div class="sheep-counter">
    <p>Sheeps: {{ state.count }} / {{ maxCounter }}</p>
    <button type="button" @click="handleCountClick">+</button>
  </div>
  <h3 v-if="completed">Mission Complete! No more sheeps!</h3>
</template>

<script setup>
import { defineProps, toRefs, reactive, computed } from 'vue'

const props = defineProps({
  maxCounter: Number,
})

const { maxCounter } = toRefs(props)
const state = reactive({ count: 0 })

const missionCompleted = () => state.count >= maxCounter.value
const completed = computed(missionCompleted)

const handleCountClick = () => {
  if (!missionCompleted()) {
    state.count++
  }
}
</script>

<style scoped>
.sheep-counter {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.sheep-counter > * {
  margin: 5px;
}

h3 {
  color: firebrick;
}

button {
  color: #42b983;
  border: 0;
  border-radius: 5px;
}
</style>
