import {createReducer} from '@reduxjs/toolkit';
import { changeGenre } from './actions';

import { films } from '../mocks/film';

const initialState = {
  genre: 'All genres',
  filmsList: films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;


    });
});
export {reducer};

