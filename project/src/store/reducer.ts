import {createReducer} from '@reduxjs/toolkit';
import { addFilms, changeGenre, loadCurrentFilm, loadFilms, loadMoreLikesFilms, loadPromoFilm, loadReviews, requireAuthorization, resetMaxFilms, setError } from './actions';


import { AuthorizationStatus, DEFAULT_GENRE, FilmsOnPage } from '../consts';
import { Film, Films } from '../types/film';
import { Reviews } from '../types/reviews';


type InitalState = {
genre: string,
  films: Films,
error: string,
isDataLoaded: boolean,
authorizationStatus: AuthorizationStatus,
maxFilms: number,
promoFilm: Film | object,
currentFilm: Film | object,
likeFilms: Films,
reviews:Reviews,
}
const initialState: InitalState = {
  genre: DEFAULT_GENRE,
  films: [],
  error: '',
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  maxFilms : +FilmsOnPage.Initial,
  promoFilm: {},
  currentFilm: {},
  likeFilms : [],
  reviews: [],

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
    })

    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })

    .addCase(loadCurrentFilm, (state, action) => {
      state.currentFilm = action.payload;
    })

    .addCase(loadMoreLikesFilms, (state, action) => {
      state.likeFilms  = action.payload;
    })

    .addCase(loadReviews, (state, action) => {
      state.reviews  = action.payload;
    });

});
export {reducer};

