const baseUrl = "https://jsonplaceholder.typicode.com/todos";
import type Todo from "@/types/todo";

export const getTodos = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data as Todo[];
};
