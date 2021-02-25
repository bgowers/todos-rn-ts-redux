export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface AddTodoAction {
  type: typeof ADD_TODO
  payload: string
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO
  payload: number
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO
  payload: number
}

export type TodoActionTypes = AddTodoAction | DeleteTodoAction | ToggleTodoAction;