<template>
  <div class="container">
    <div :style="greenFieldStyle">
      <Sheep v-for="sheep in sheeps" :key="sheep.id" :sheep="sheep" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, toRefs, computed } from 'vue'
import Sheep from './Sheep.vue'

const props = defineProps({
  fieldWidth: Number,
  fieldHeight: Number,
  sheeps: Array,
})

const { fieldWidth, fieldHeight, sheeps } = toRefs(props)

const greenFieldStyle = computed(() => {
  return {
    width: `${fieldWidth.value}px`,
    height: `${fieldHeight.value}px`,
    margin: '20px',
    position: 'relative',
    backgroundImage: `url('./counting_sheep_game.png')`,
  }
})
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
</style>