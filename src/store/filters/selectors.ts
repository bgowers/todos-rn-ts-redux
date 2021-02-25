import { Filter } from './types';
import { RootState } from '../types';

export const selectFilter = (state: RootState): Filter => state.filter;
