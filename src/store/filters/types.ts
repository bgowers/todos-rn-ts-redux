export const CHANGE_FILTER = 'CHANGE_FILTER';

export enum Filter {
  All = 'All',
  Incomplete = 'Incomplete',
  Complete = 'Complete'
}

interface ChangeFilterAction {
  type: typeof CHANGE_FILTER;
  payload: Filter;
}

export type FilterActionTypes = ChangeFilterAction;