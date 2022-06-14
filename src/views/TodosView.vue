<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { getTodos } from "@/services/api/todosApi";
import type Todo from "@/types/todo";
import TodoOne from '@/completed/TodoOne.vue'
// import BaseButton from "@/components/base/BaseButton.vue";

let todos = ref<Todo[]>([
  {
    userId: 1,
    id: 1,
    title: "sample todo",
    completed: false,
  },
]);

const seletedTodos = computed(() => {
  return todos.value.slice(0, 9)
})

onMounted(async () => {
  const data = await getTodos();
  todos.value = data;
});
</script>

<template>
  <div class="todos">
    <TodoOne v-for="todo in seletedTodos" :key="todo.id">{{ todo.title }} :todo="todo"</TodoOne>
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
