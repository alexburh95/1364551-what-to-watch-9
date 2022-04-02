import {createAction} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../consts';
import { Film, Films } from '../types/film';
import { Reviews } from '../types/reviews';


export const changeGenre = createAction<string>('changeGenre');
export const loadFilms = createAction<Films>('data/loadFilms');
export const setError = createAction<string>('setError');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const addFilms = createAction('data/addFilms');
export const resetMaxFilms = createAction('film/resetMaxFilms');
export const loadPromoFilm = createAction<Film>('data/loadPromoFilm');
export const loadCurrentFilm = createAction<Film>('data/loadCurrentFilm');
export const loadMoreLikesFilms = createAction<Films>('data/loadMoreLikesFilms');
export const loadReviews = createAction<Reviews>('data/loadComments');
