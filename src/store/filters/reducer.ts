import { CHANGE_FILTER, Filter, FilterActionTypes } from './types';

const initialState = Filter.All;

const filterReducer = (state = initialState, { type, payload }: FilterActionTypes): Filter => {
  switch (type) {
  case CHANGE_FILTER:
    return payload;
  default:
    return state;
  }
};

export default filterReducer;