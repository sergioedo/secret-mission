<template>
  <section :style="getMessageStyle(theme)">
    <p v-if="showMessage"><slot></slot></p>
    <p v-if="!showMessage"><img @click="onUrracaClick" :style="{ width: '50px'}" :src="getUrracaImage()"/></p>
  </section>
</template>

<script setup>
import { defineProps, ref, toRefs } from 'vue'
const props = defineProps({
  theme: String,
  isSecret: Boolean
})

const { theme, isSecret } = toRefs(props)
const showMessage = ref(!isSecret.value)

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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
}

const onUrracaClick = () => {
    showMessage.value = true
}

const getUrracaImage = () => {
  const urracaImages = ['urraca1.png', 'urraca2.jpeg', 'urraca3.jpeg', 'urraca4.jpeg', 'urraca5.jpeg']
  const imgIndex = Math.floor(Math.random() * urracaImages.length)
  return `/${urracaImages[imgIndex]}`
}
</script>