<template>
  <h3><i>Teleclub de Villaquinta</i></h3>
  <div class="board">
    <SecretMessage
      v-for="(message, index) in messages"
      :theme="message.theme"
      :key="index"
    >
      {{ CaesarCipher(message.text, CAESAR_CODE) }}
    </SecretMessage>
  </div>
</template>

<script setup>
import SecretMessage from './SecretMessage.vue'

const messages = [
  { text: 'Se venden burras en el sotano de la bodega', theme: 'dark' },
  {
    text: 'No pidas el plato especial del chef en el bar del pueblo',
    theme: 'light',
  },
  {
    text: 'Si has llegado a leer esto, estás muy aburrido.... :P',
    theme: 'dark',
  },
]

const CAESAR_CODE = 17
const CaesarCipher = (str, num) => {
  str = str.toLowerCase()

  var result = ''
  var charcode = 0

  for (var i = 0; i < str.length; i++) {
    charcode = str[i].charCodeAt() + num
    result += String.fromCharCode(charcode)
  }
  return result
}
</script>

<style>
.board {
  display: flex;
  flex-direction: column;
}

.board-section {
  flex: 1;
}
</style>