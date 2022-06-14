<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "@/components/base/BaseButton.vue";

let counter = ref(0);

const increment = () => (counter.value += 1);
const decrement = () => (counter.value -= 1);
</script>

<template>
  <div class="counter">
    <h1>Counter</h1>
    <h2>The count is: {{ counter }}</h2>
    <div class="counter--buttons">
      <BaseButton @click="increment">Add</BaseButton>
      <BaseButton @click="decrement">Subtract</BaseButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  &--buttons {
    padding-top: 2em;
    width: 33%;
    display: flex;
    justify-content: space-evenly;
  }
}
</style>
