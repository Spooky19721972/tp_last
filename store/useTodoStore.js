import { create } from "zustand";
export const useTodoStore = create((set) => ({
// état global
todos: [],
// actions
addTodo: (todo) =>
 set((state) => {
 // Éviter les doublons
 if (state.todos.some((t) => t.id === todo.id)) {
 return state;
 }
 return {
 todos: [...state.todos, todo],
 };
 }),
 removeTodo: (id) =>
 set((state) => ({
 todos: state.todos.filter((t) => t.id !== id),
 })),
}));
