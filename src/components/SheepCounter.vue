<template>
  <h3 v-if="completed">Mission Complete! No more sheeps!</h3>
  <div class="sheep-counter">
    <p>Sheeps: {{ state.count }} / {{ maxCounter }}</p>
    <button type="button" @click="handleSheepClicked">+</button>
  </div>
  <SheepField
    :fieldWidth="fieldWidth"
    :fieldHeight="fieldHeight"
    :sheeps="state.sheeps"
    @on-sheep-clicked="handleSheepClicked"
  />
</template>

<script setup>
import { defineProps, toRefs, reactive, computed } from 'vue'
import SheepField from './SheepField.vue'
import { createFlock } from '../utils/sheeps'

const fieldWidth = 770
const fieldHeight = 480
const topMargin = 85

const props = defineProps({
  maxCounter: Number,
})

const { maxCounter } = toRefs(props)
const state = reactive({
  count: 0,
  sheeps: createFlock({
    numSheeps: maxCounter.value,
    fieldWidth,
    fieldHeight,
    topMargin,
  }),
})

const missionCompleted = () => state.count >= maxCounter.value
const completed = computed(missionCompleted)

const handleSheepClicked = (sheep) => {
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
