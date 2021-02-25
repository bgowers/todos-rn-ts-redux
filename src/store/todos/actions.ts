import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, TodoActionTypes } from './types';

export const addTodo = (todo: string): TodoActionTypes => (
  { type: ADD_TODO, payload: todo }
);

export const deleteTodo = (id: number): TodoActionTypes => (
  { type: DELETE_TODO, payload: id }
);

export const toggleTodo = (id: number): TodoActionTypes =>  (
  { type: TOGGLE_TODO, payload: id }
);