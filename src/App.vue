<template>
  <!-- <h1>Secret Mission 1</h1>
  <SheepCounter :maxCounter="100" />
  <hr /> -->
  <!-- <h1>Secret Mission 2</h1>
  <BulletinBoard :messages="sampleMessages" :cipher="true" />
  <hr /> -->
  <h1>Secret Mission 3</h1>
  <BulletinBoard :messages="sampleMessages" :cipher="false" />
</template>

<script setup>
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
import SheepCounter from './components/SheepCounter.vue'
import BulletinBoard from './components/BulletinBoard.vue'
import { ref } from 'vue'

const sampleMessages = ref([
  { text: 'Se venden burras en el sotano de la bodega', theme: 'dark' },
  {
    text: 'No pidas el plato especial del chef en el bar del pueblo',
    theme: 'light',
  },
  {
    text: 'Si has llegado a leer esto, estás muy aburrido.... :P',
    theme: 'dark',
  },
])
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
