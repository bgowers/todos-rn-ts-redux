import { CHANGE_FILTER, Filter, FilterActionTypes } from './types';

export const changeFilter = (filter: Filter): FilterActionTypes => (
  { type: CHANGE_FILTER, payload: filter }
);