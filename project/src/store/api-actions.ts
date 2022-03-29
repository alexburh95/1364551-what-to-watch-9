import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '.';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../consts';
import { errorHandle } from '../services/error-handle';
import { DataFilms } from '../types/film';
import { loadFilms, setError } from './actions';

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
      const {data} = await api.get<DataFilms>(APIRoute.Films);
      store.dispatch(loadFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);
