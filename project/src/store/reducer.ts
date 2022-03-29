import {createReducer} from '@reduxjs/toolkit';
import { changeGenre, loadFilms, setError } from './actions';

import { films } from '../mocks/film';
import { DEFAULT_GENRE } from '../consts';

const initialState = {
  genre: DEFAULT_GENRE,
  filmsList: films,
  error: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;


    })
    .addCase(loadFilms, (state, action) => {
      state.filmsList = action.payload;
    })

    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });

});
export {reducer};

