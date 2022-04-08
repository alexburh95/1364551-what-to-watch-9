import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { FilmData } from '../../types/state';


const initialState: FilmData = {
  films: [],
  likeFilms : [],
  reviews: [],
  favoriteFilms: [],
  promoFilm: {},
  currentFilm: {},
  isDataLoaded: false,
  sendingReview: false,
};

export const filmData = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    loadFilms: (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    },
    loadMoreLikesFilms: (state, action) => {
      state.likeFilms = action.payload;
    },
    loadPromoFilm: (state, action) => {
      state.promoFilm = action.payload;
    },
    loadCurrentFilm: (state, action) => {
      state.currentFilm = action.payload;
    },
    loadReviews: (state, action) => {
      state.reviews = action.payload;
    },
    sendReview: (state, action) => {
      state.sendingReview = action.payload;
    },
    LoadFavoriteFilms: (state, action) => {
      state.favoriteFilms = action.payload;
    },
  },
});

export const {
  loadFilms,
  loadMoreLikesFilms,
  loadCurrentFilm,
  loadReviews,
  loadPromoFilm,
  LoadFavoriteFilms,
  sendReview,
} = filmData.actions;
