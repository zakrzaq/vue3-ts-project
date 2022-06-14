<script setup lang="ts">
import { RouterView } from "vue-router";
import MainNavVue from "./components/MainNav.vue";
</script>

<template>
  <MainNavVue />
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: relative;
  font-weight: normal;
}

body {
  min-height: 100vh;
  color: $text-color;
  background: $background-color;
  line-height: 1.6;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  display: flex;
  justify-content: center;
}
</style>
