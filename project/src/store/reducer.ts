import {createReducer} from '@reduxjs/toolkit';
import { changeGenre, loadFilms, setError } from './actions';


import { DEFAULT_GENRE } from '../consts';
import { Films } from '../types/film';


type InitalState = {
genre: string,
  films: Films,
error: string,
isDataLoaded: boolean
}
const initialState: InitalState = {
  genre: DEFAULT_GENRE,
  films: [],
  error: '',
  isDataLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;


    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    })

    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });

});
export {reducer};

