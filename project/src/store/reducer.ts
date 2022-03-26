import {createReducer} from '@reduxjs/toolkit';
import { changeGenre } from './actions';

const initialState = {
  genre: 'All genres',
  filmsList: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const {genre} = action.payload;
      state.genre = genre;

    });
});
export {reducer};

