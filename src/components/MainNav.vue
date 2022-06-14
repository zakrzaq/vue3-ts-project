<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/counter">Counter</RouterLink>
      <RouterLink to="/todos">Todos</RouterLink>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    font-size: 1.6em;
    color: $primary-green;
    padding-left: 15px;
  }
  a:hover,
  a:focus {
    text-decoration: underline;
  }
  nav:first-child {
    padding-left: 0;
  }
}
</style>
