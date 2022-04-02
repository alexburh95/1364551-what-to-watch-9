import {createReducer} from '@reduxjs/toolkit';
import { addFilms, changeGenre, loadFilms, requireAuthorization, resetMaxFilms, setError } from './actions';


import { AuthorizationStatus, DEFAULT_GENRE, FilmsOnPage } from '../consts';
import { Films } from '../types/film';


type InitalState = {
genre: string,
  films: Films,
error: string,
isDataLoaded: boolean,
authorizationStatus: AuthorizationStatus,
maxFilms: number,
}
const initialState: InitalState = {
  genre: DEFAULT_GENRE,
  films: [],
  error: '',
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  maxFilms : +FilmsOnPage.Initial,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.maxFilms = +FilmsOnPage.Initial;

    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    })

    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })

    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(addFilms, (state) => {
      state.maxFilms += +FilmsOnPage.MaxPerStep;
    })
    .addCase(resetMaxFilms, (state) => {
      state.maxFilms = +FilmsOnPage.Initial;
    });

});
export {reducer};

