import { createReducer } from '@reduxjs/toolkit';
import { filterContact } from './filter-actions';

export const filterReducer = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});
