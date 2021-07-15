<template>
  <h3 v-if="sheepsNotCounted.length === 0">
    Mission Complete! No more sheeps!
  </h3>
  <div class="sheep-counter">
    <p>Sheeps: {{ sheepsCounted.length }} / {{ maxCounter }}</p>
  </div>
  <SheepField
    :fieldWidth="fieldWidth"
    :fieldHeight="fieldHeight"
    :sheeps="sheepsNotCounted"
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
  sheeps: createFlock({
    numSheeps: maxCounter.value,
    fieldWidth,
    fieldHeight,
    topMargin,
  }),
})

const sheepsCounted = computed(() => state.sheeps.filter((s) => s.counted))
const sheepsNotCounted = computed(() => state.sheeps.filter((s) => !s.counted))
const missionCompleted = () => sheepsCounted.length >= maxCounter.value
// const completed = computed(missionCompleted())  //not works!!!

const handleSheepClicked = (sheep) => {
  if (!missionCompleted()) {
    const sheepIndex = state.sheeps.findIndex((s) => s.id === sheep.id)
    if (sheepIndex >= 0) state.sheeps[sheepIndex].counted = true
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
