<template>
  <h1>Secret Mission 1</h1>
  <SheepCounter :maxCounter="100" />
  <hr />
  <h1>Secret Mission 2</h1>
  <BulletinBoard :messages="sampleMessages" :cipher="true" />
  <hr />
  <h1>Secret Mission 3</h1>
  <BulletinBoard :messages="boardMessages"/>
  <hr />
  <h1>Secret Mission 4</h1>
  <BulletinBoard :messages="boardSecretMessages" />
</template>

<script setup>
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
import SheepCounter from './components/SheepCounter.vue'
import BulletinBoard from './components/BulletinBoard.vue'
import { ref, onMounted } from 'vue'
import { testMessages, getMessages } from './utils/messages'

const sampleMessages = ref(testMessages)
const boardMessages = ref([])
const boardSecretMessages = ref([])

onMounted(() => {
  getMessages().then((messages) => {
    boardMessages.value = messages
  })
  getMessages(true).then((messages) => {
    boardSecretMessages.value = messages
  })
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
