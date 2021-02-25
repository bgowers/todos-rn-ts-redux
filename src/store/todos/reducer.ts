import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, Todo, TodoActionTypes } from './types';

const initialState: Todo[] = [];

let id = 0;

const todosReducer = (state = initialState, action: TodoActionTypes): Todo[] => {
  switch (action.type) {
  case ADD_TODO:
    return [
      {
        id: ++id,
        text: action.payload,
        completed: false,
      },
      ...state,
    ];
  case DELETE_TODO:
    return state.filter(todo => todo.id !== action.payload);
  case TOGGLE_TODO:
    return state.map((todo) => {
      if (todo.id !== action.payload) {
        return todo;
      }
      return {
        ...todo,
        completed: !todo.completed,
      };
    });
  default:
    return state;
  }
};

export default todosReducer;