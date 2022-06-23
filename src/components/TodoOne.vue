<script setup lang="ts">
import type Todo from "@/types/todo";
import { computed } from "vue";
// import { defineProps } from 'vue'

const props = defineProps<{
  todo: Todo;
}>();

const userName = (userId: number): string => {
  switch (userId) {
    case 1:
      return "Jake";
    case 2:
      return "Judy";
    default:
      return "Unknown";
  }
};

const completedTag = computed((): string => {
  return props.todo.completed ? "todo-tag--completed" : "";
});

const completeTodo = () => {
  if (!props.todo.completed) {
    props.todo.completed = true;
  } else {
    props.todo.completed = false;
  }
};

const editTodo = (event: Event) => {
  console.log(event.target);
};
const removeTodo = (event: Event) => {
  console.log(event.target);
};
</script>

<template>
  <div class="todo">
    <div class="todo-tag" :class="completedTag"></div>
    <div class="todo-content">
      <div class="todo-content-title">
        {{ props.todo.title }}
      </div>
      <div class="todo-content-details">
        <div class="todo-content-details__completed">
          {{ props.todo.completed ? "Completed" : "Pending" }}
        </div>
        <div class="todo-content-details__user">
          {{ userName(props.todo.userId) }}
        </div>
      </div>
    </div>
    <div class="todo-buttons">
      <button class="btn btn-complete" @click="completeTodo">V</button>
      <button class="btn btn-edit" @click="editTodo">E</button>
      <button class="btn btn-trash" @click="removeTodo">X</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.todo {
  display: flex;
  align-content: center;
  justify-content: center;
  min-width: 400px;
  max-width: 700px;
  width: 100%;
  border-radius: 5px;
  border-color: #cfcfcf;
  color: #cfcfcf;
  background-color: #3b3939;
  margin-bottom: 15px;

  &-tag {
    width: 10px;
    border-radius: 5px 0 0 5px;
    background-color: #2d7fa8;
    margin-right: 25px;

    &--completed {
      background-color: $primary-green;
    }
  }

  &-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 12px;

    .btn {
      width: 33px;
      height: 33px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      border-radius: 5px;
      margin-left: 5px;
      transition: opacity 1s;

      &:hover {
        opacity: 0.8;
      }
    }

    .btn-complete {
      background-color: $primary-green;
      color: #cfcfcf;
    }

    .btn-edit {
      background-color: #2d7fa8;
      color: #cfcfcf;
    }

    .btn-trash {
      background-color: #a82d2d;
      color: #cfcfcf;
    }
  }

  &-content {
    width: 100%;

    &-title {
      width: 100%;
      font: 1.2em;
      font-weight: 500;
      text-transform: capitalize;
    }

    &-details {
      width: 100%;
      display: flex;
      align-self: flex-end;

      &__completed {
        flex-grow: 1;
      }

      &__user {
        flex-grow: 1;
        text-align: right;
      }
    }
  }
}
</style>
