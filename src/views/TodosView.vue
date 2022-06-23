<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { getTodos } from "@/services/api/todosApi";
import type Todo from "@/types/todo";
import TodoOne from "@/components/TodoOne.vue";
import BaseButton from "@/components/base/BaseButton.vue";

let todos = ref<Todo[]>([
  {
    userId: 1,
    id: 1,
    title: "sample todo",
    completed: false,
  },
]);

let localTodos = ref<any[] | Todo[]>([]);

let todoInput = ref<string>("");

//const selectedTodos = computed((): Todo[] => {
//  return todos.value.slice(0, 9);
//});

//const completedTodos = computed((): Todo[] => {
//  return selectedTodos.filter((todo: Todo) => todo.completed);
//});

const addTodo = () => {
  let newTodo: Todo = {
    userId: 1,
    id: Math.floor(Math.random() * 11111),
    title: todoInput.value,
    completed: false,
  };
  localTodos.value.push(newTodo);
  todoInput.value = ''
};

onMounted(async () => {
  const data = await getTodos();
  todos.value = data;
});
</script>

<template>
  <div class="page-wrapper">
    <div class="add-todo">
      <input
        type="text"
        class="add-todo__input"
        v-model="todoInput"
        @keyup.enter="addTodo"
      />
      <BaseButton @click="addTodo">Add Todo</BaseButton>
    </div>
    <div class="todos">
      <TodoOne v-for="todo in localTodos" :key="todo.id" :todo="todo" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-wrapper {
  .add-todo {
    display: flex;
    min-width: 400px;
    max-width: 700px;
    width: 100%;
    margin-bottom: 40px;

    & input {
      flex-grow: 4;
      margin-right: 10px;
      border: none;
      border-radius: 5px;
      padding: 0 10px;
    }
  }

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
}
</style>
