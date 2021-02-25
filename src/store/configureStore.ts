import { Store, combineReducers, createStore } from 'redux';

import { RootState } from './types';
import filterReducer from './filters/reducer';
import todosReducer from './todos/reducer';

const rootReducer = combineReducers<RootState>({
  todos: todosReducer,
  filter: filterReducer,
});

const configureStore = (): Store => {
  return createStore(rootReducer);
};

export default configureStore;