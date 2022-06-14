<script setup lang="ts"></script>

<template>
  <button><slot /></button>
</template>

<style lang="scss" scoped>
button {
  min-width: 95px;
  padding: 10px 25px;
  background-color: $primary-green;
  color: $text-color;
  border-radius: 5px;
  border: 0;
  font-weight: bold;
  text-transform: capitalize;
  font-size: 1.2em;
}
</style>
