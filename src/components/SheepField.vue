<template>
  <div class="container">
    <div :style="greenFieldStyle">
      <Sheep
        v-for="sheep in sheeps"
        :key="sheep.id"
        :sheep="sheep"
        @on-sheep-click="handleSheepClick"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps, toRefs, computed, defineEmits } from 'vue'
import Sheep from './Sheep.vue'

const props = defineProps({
  fieldWidth: Number,
  fieldHeight: Number,
  sheeps: Array,
})

const { fieldWidth, fieldHeight, sheeps } = toRefs(props)

const emit = defineEmits(['onSheepClicked'])
const handleSheepClick = (sheep) => {
  emit('onSheepClicked', sheep)
}

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