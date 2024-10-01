import { get, writable } from "svelte/store";
import type { TodoType } from "../types/todo";

export function todoStore() {
  const todos = writable<TodoType[]>([]);
  const selected = writable<number | undefined>();

  function add(name: string) {
    const currentTodos = get(todos);
    const newTodo = {
      id: Math.max(...currentTodos.map((todo) => todo.id)) + 1,
      name,
      completed: false,
    };
    todos.update((items) => [...items, newTodo]);
  }
}
