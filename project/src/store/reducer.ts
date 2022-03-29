import {createReducer} from '@reduxjs/toolkit';
import { changeGenre, loadFilms } from './actions';

import { films } from '../mocks/film';
import { DEFAULT_GENRE } from '../consts';

const initialState = {
  genre: DEFAULT_GENRE,
  filmsList: films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;


    })
    .addCase(loadFilms, (state, action) => {
      state.filmsList = action.payload;
    });

});
export {reducer};

