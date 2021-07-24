<template>
  <section :style="getMessageStyle(theme)">
    <p><slot></slot></p>
  </section>
</template>

<script setup>
import { defineProps, toRefs } from 'vue'
const props = defineProps({
  theme: String,
})

const { theme } = toRefs(props)
const getMessageStyle = (theme) => {
  const color = theme === 'dark' ? 'white' : 'black'
  const backgroundColor = theme === 'dark' ? '#207567' : '#b4d6c1'
  return {
    height: '100px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'black',
    color,
    backgroundColor,
    borderRadius: '10px',
    margin: '3px',
  }
}
</script>