<template>
  <h3><i>Click on the sheeps head!</i></h3>
  <!-- <h3 v-if="completed"> -->
  <!-- <h3 v-if="missionCompleted()"> -->
  <!-- <h3 v-if="sheepsCounted.length >= maxCounter.value"> -->
  <h3 class="title-red" v-if="sheepsNotCounted.length === 0">
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
import {
  ref,
  defineProps,
  toRefs,
  reactive,
  computed,
  onMounted,
  onUnmounted,
} from 'vue'
import SheepField from './SheepField.vue'
import { createFlock, moveSheeps } from '../utils/sheeps'

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
// const completed = computed(missionCompleted) //not works, not reactive dependencies!!!

const handleSheepClicked = (sheep) => {
  if (!missionCompleted()) {
    const sheepIndex = state.sheeps.findIndex((s) => s.id === sheep.id)
    if (sheepIndex >= 0) state.sheeps[sheepIndex].counted = true
  }
}

const intervalID = ref(0)
onMounted(
  () =>
    (intervalID.value = setInterval(() => {
      const { sheeps } = state
      state.sheeps = moveSheeps({ sheeps, fieldWidth, fieldHeight, topMargin })
    }, 40))
)
onUnmounted(() => clearInterval(intervalID))
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

.title-red {
  color: firebrick;
}

button {
  color: #42b983;
  border: 0;
  border-radius: 5px;
}
</style>
