<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { getTodos } from "@/services/api/todosApi";
import type Todo from "@/types/todo";
import TodoOne from "@/components/TodoOne.vue";
// import BaseButton from "@/components/base/BaseButton.vue";

let todos = ref<Todo[]>([
  {
    userId: 1,
    id: 1,
    title: "sample todo",
    completed: false,
  },
]);

const selectedTodos = computed(() => {
  return todos.value.slice(0, 9);
});

onMounted(async () => {
  const data = await getTodos();
  todos.value = data;
});
</script>

<template>
  <div class="todos">
    <TodoOne v-for="todo in selectedTodos" :key="todo.id" :todo="todo"/>
  </div>
</template>

<style scoped lang="scss">
.todos {
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
