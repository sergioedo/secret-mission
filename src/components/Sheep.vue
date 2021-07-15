<template>
  <div :style="getSheepStyle(sheep)">
    <div class="leg left"></div>
    <div class="leg right"></div>
    <div class="fluff left">
      <!--  ::before fluff appears as if entered here      -->
      <!--  ::after fluff appears as if entered here      -->
    </div>
    <div class="fluff right"></div>
    <a @click="$emit('onSheepClick', sheep)">
      <div class="head">
        <!--   ::before ear element appears as if entered here     -->
        <div class="eye left"></div>
        <div class="eye right"></div>
        <div class="mouth"></div>
        <!--   ::after ear element appears as if entered here     -->
      </div>
    </a>
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
    left: sheep.position.x + 'px',
    top: sheep.position.y + 'px',
    '--sheep-size': sheep.height + 'px',
    '--fluff-size': sheep.height * (70 / 180) + 'px',
    '--ear-width': sheep.height * (15 / 180) + 'px',
    '--ear-height': sheep.height * (20 / 180) + 'px',
  }
}
</script>

<style scoped>
/* MIDDLE FLUFF -> Both left & right fluff circles share this style */
.fluff {
  position: absolute;
  width: var(--fluff-size);
  height: var(--fluff-size);
  border-radius: 50%;
  background: white;
  top: 30%;
}

/* RIGHT MIDDLE FLUFF only -> this places the right-hand section of fluff over to the right */
.fluff.right {
  right: 0;
}

/* UPPER FLUFF -> These styles are shared between the first child of both left and right fluff */
.fluff::before {
  content: '';
  position: absolute;
  width: var(--fluff-size);
  height: var(--fluff-size);
  border-radius: 50%;
  background: white;
  top: -40%;
}

/* UPPER-LEFT FLUFF only */
.fluff.left::before {
  left: 50%;
}

/* UPPER-RIGHT FLUFF only */
.fluff.right::before {
  left: -50%;
}

/* LOWER FLUFF -> These styles are shared between the last child of both left and right fluff */
.fluff::after {
  content: '';
  top: 40%;
  position: absolute;
  width: var(--fluff-size);
  height: var(--fluff-size);
  border-radius: 50%;
  background: white;
}

/* LOWER LEFT FLUFF only */
.fluff.left::after {
  left: 50%;
}

/* LOWER RIGHT FLUFF only */
.fluff.right::after {
  left: -50%;
}

.head {
  position: absolute;
  left: 10%;
  top: 25%;
  transform: translateX(-50%);
  width: 40%;
  height: 40%;
  background: black;
  border-radius: 50%;
}

/* LEFT ear */
.head::before {
  content: '';
  position: absolute;
  background: black;
  width: var(--ear-width);
  height: var(--ear-height);
  border-radius: 50%;
  top: -5%;
  left: 5%;
}

/* RIGHT ear */
.head::after {
  content: '';
  position: absolute;
  background: black;
  width: var(--ear-width);
  height: var(--ear-height);
  border-radius: 50%;
  top: -5%;
  right: 5%;
}

/* These styles are shared for both left and right eyes */
.eye {
  position: absolute;
  background: black;
  border: calc(var(--sheep-size) / 30) solid white;
  height: 15%;
  width: 15%;
  border-radius: 50%;
  top: 20%;
}

/* LEFT eye positioning */
.eye.left {
  left: 15%;
}

/* RIGHT eye positioning */
.eye.right {
  right: 15%;
}

.mouth {
  position: absolute;
  bottom: -8%;
  /*  This combo of left and transform centers horizontally within the parent element  */
  left: 50%;
  transform: translateX(-50%);
  background: white;
  width: 40%;
  height: 40%;
  /*  Clip path creates the semi circle shape  */
  clip-path: circle(50% at 50% 0);
}

/* Shared styles for both LEFT and RIGHT legs */
.leg {
  position: absolute;
  top: 70%;
  height: 25%;
  width: 10%;
  background: black;
  border-radius: 30%;
}

/* LEFT leg positioning */
.leg.left {
  left: 30%;
  transform: translateX(-30%);
}

/* RIGHT leg positioning */
.leg.right {
  right: 30%;
  transform: translateX(30%);
}
</style>