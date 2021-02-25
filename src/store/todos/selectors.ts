import { Filter } from '../filters/types';
import { RootState } from '../types';
import { Todo } from './types';

export const selectTodos = (state: RootState): Todo[] => state.todos;

export const selectTodoIds = (state: RootState): number[] => state.todos.map(todo => todo.id);

export const selectTodoById = (state: RootState, id: number): Todo | undefined => (
  state.todos.find(todo => todo.id === id)
);

export const selectFilteredTodoIds = (state: RootState): number[] => {
  const { filter, todos } = state;

  switch (filter) {
  case Filter.Incomplete:
    return todos.filter(todo => !todo.completed).map(todo => todo.id);
  case Filter.Complete:
    return todos.filter(todo => todo.completed).map(todo => todo.id);
  default:
    return selectTodoIds(state);
  }
};
