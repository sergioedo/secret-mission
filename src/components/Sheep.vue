<template>
  <div :style="getSheepStyle(sheep)">
    <a @click="$emit('onSheepClick', sheep)">{{ sheep.id }} </a>
  </div>
</template>

<script setup>
import { defineProps, toRefs, defineEmits } from 'vue'

const props = defineProps({
  sheep: Object,
})

const { sheep } = toRefs(props)

const emit = defineEmits(['onSheepClick'])

const getSheepStyle = (sheep) => {
  return {
    position: 'absolute',
    width: `${sheep.width}px`,
    height: `${sheep.height}px`,
    backgroundColor: 'red',
    left: sheep.position.x + 'px',
    top: sheep.position.y + 'px',
  }
}
</script>