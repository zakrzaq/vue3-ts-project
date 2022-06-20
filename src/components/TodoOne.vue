<script setup lang="ts">
import type Todo from '@/types/todo'
import { defineProps } from 'vue'
const props = defineProps<{
  todo: Todo
}>()

</script>

<template>
  <p>{{ props.todo.title }}</p>
</template>

<style lang="scss" scoped>

</style>
