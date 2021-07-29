<template>
  <h3><i>Teleclub de Villaquinta</i></h3>
  <div class="board">
    <SecretMessage
      v-for="(message, index) in messages"
      :theme="message.theme"
      :isSecret="message.isSecret"
      :key="index"
    >
      {{ getTextMessage(message, cipher) }}
    </SecretMessage>
  </div>
</template>

<script setup>
import SecretMessage from './SecretMessage.vue'
import { defineProps, toRefs, computed } from 'vue'

const props = defineProps({
  messages: Array,
  cipher: Boolean,
})

const { messages, cipher } = toRefs(props)

const CAESAR_CODE = 17
const getCaesarCipher = (str, num) => {
  str = str.toLowerCase()

  var result = ''
  var charcode = 0

  for (var i = 0; i < str.length; i++) {
    charcode = str[i].charCodeAt() + num
    result += String.fromCharCode(charcode)
  }
  return result
}

const getTextMessage = (message, cipher) => {
  if (cipher) return getCaesarCipher(message.text, CAESAR_CODE)
  else return message.text
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