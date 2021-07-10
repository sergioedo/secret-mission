<template>
  <div :style="getSheepStyle(sheep)">
    <a :href="sheep.id">{{ sheep.id }} </a>
  </div>
</template>

<script setup>
import { defineProps, toRefs, computed } from 'vue'

const props = defineProps({
  sheep: Object,
})

const { sheep } = toRefs(props)

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