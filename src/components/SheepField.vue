<template>
  <div :style="greenFieldStyle">
    <div
      class="sheep"
      v-for="sheep in sheeps"
      :key="sheep.id"
      :style="getSheepStyle(sheep)"
    >
      <a :href="sheep.id">{{ sheep.id }} </a>
    </div>
  </div>
</template>

<script setup>
import { defineProps, toRefs, computed } from 'vue'

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

const getSheepStyle = (sheep) => {
  return {
    position: 'absolute',
    width: '50px',
    height: '50px',
    backgroundColor: 'red',
    left: sheep.position.x + 'px',
    top: sheep.position.y + 'px',
  }
}
</script>