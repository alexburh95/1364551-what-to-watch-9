import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '.';
import { APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../consts';
import { errorHandle } from '../services/error-handle';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { Film, Films } from '../types/film';
import { Reviews, UserReview } from '../types/reviews';
import { UserData } from '../types/user-data';
import { redirectToRoute } from './actions';
import { loadCurrentFilm, loadReviews, loadFilms, loadMoreLikesFilms, loadPromoFilm, sendReview, LoadFavoriteFilms } from './film-data/film-data';
import { requireAuthorization, setError } from './user-process/user-process';

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchFilmsnAction = createAsyncThunk(
  'data/fetchFilms',
  async () => {


    try {
      const {data} = await api.get<Films>(APIRoute.Films);
      store.dispatch(loadFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchCurrentFilmAction = createAsyncThunk(
  'data/fetchCurrentFilm',
  async (filmId: string) => {

    try {
      const {data} = await api.get<Film>((`${APIRoute.Films}/${filmId}`));
      store.dispatch(loadCurrentFilm(data));
    } catch (error) {
      errorHandle(error);
      store.dispatch(redirectToRoute(AppRoute.Error));
    }
  },
);
export const fetchFavoriteFilmsAction = createAsyncThunk(
  'data/fetchFavoriteFilms',
  async () => {
    try {
      const {data} = await api.get<Films>(APIRoute.Favorite);
      store.dispatch(LoadFavoriteFilms(data));
    } catch (error) {
      errorHandle(errorHandle);
    }
  },
);

export const fetchReviewsAction = createAsyncThunk(
  'data/fetchReviews',
  async (filmId: string) => {

    try {
      const {data} = await api.get<Reviews>((`${APIRoute.Reviews}/${filmId}`));
      store.dispatch(loadReviews(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchMoreLikeFilmsAction = createAsyncThunk(
  'data/fetchMoreLikeFilms',
  async (filmId: string) => {

    try {
      const {data} = await api.get<Films>((`${APIRoute.Films}/${filmId}/similar`));
      store.dispatch(loadMoreLikesFilms(data));
    } catch (error) {
      errorHandle(error);
      store.dispatch(redirectToRoute(AppRoute.Error));
    }
  },
);

export const fetchPromoFilmAction = createAsyncThunk(
  'data/fetchPromoFilm',
  async () => {


    try {
      const {data} = await api.get<Film>(APIRoute.Promo);
      store.dispatch(loadPromoFilm(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch(error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      store.dispatch(redirectToRoute(AppRoute.Main));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const fetchReviewAction = createAsyncThunk(
  'data/fetchReview',
  async ({rating, comment, filmId}: UserReview) => {
    try {
      await api.post<UserReview>(`${APIRoute.Reviews}/${filmId}`, {rating, comment});
      store.dispatch(sendReview(false));
      store.dispatch(redirectToRoute(`films/${filmId}`));
    } catch (error) {
      errorHandle(error);
      store.dispatch(redirectToRoute(AppRoute.Error));
      store.dispatch(sendReview(false));

    }
  },
);


export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);
