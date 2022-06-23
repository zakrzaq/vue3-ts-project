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
let listView = ref("All");

const addTodo = () => {
  let newTodo: Todo = {
    userId: 1,
    id: Math.floor(Math.random() * 11111),
    title: todoInput.value,
    completed: false,
  };
  localTodos.value.push(newTodo);
  todoInput.value = "";
};

const updateList = (event: Event) => {
  listView.value = event.target.innerHTML;
};

const filteredTodos = computed(() => {
  switch (listView.value) {
    case "All":
      return todos.value;
    case "Completed":
      return todos.value.filter((todo) => todo.completed);
    case "Pending":
      return todos.value.filter((todo) => !todo.completed);
      deafult: return todos.value;
  }
});

const filteredLocalTodos = computed(() => {
  switch (listView.value) {
    case "All":
      return localTodos.value;
    case "Completed":
      return localTodos.value.filter((todo) => todo.completed);
    case "Pending":
      return localTodos.value.filter((todo) => !todo.completed);
      deafult: return todos.value;
  }
});

onMounted(async () => {
  const data = await getTodos();
  todos.value = data.slice(0, 11);
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
    <div class="list-selector">
      <div class="selector-tag" @click="updateList">All</div>
      <div class="selector-tag" @click="updateList">Completed</div>
      <div class="selector-tag" @click="updateList">Pending</div>
    </div>
    <div class="todos">
      <TodoOne v-for="todo in filteredLocalTodos" :key="todo.id" :todo="todo" />
      <TodoOne v-for="todo in filteredTodos" :key="todo.id" :todo="todo" />
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
    margin-bottom: 10px;

    & input {
      flex-grow: 4;
      margin-right: 10px;
      border: none;
      border-radius: 5px;
      padding: 0 10px;
    }
  }

  .list-selector {
    margin-bottom: 40px;
    display: flex;
    justify-content: space-around;

    .selector-tag {
      padding: 5px 20px;
      min-width: 50px;
      background: white;
      color: black;
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
