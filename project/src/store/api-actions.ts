import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '.';
import { APIRoute } from '../consts';
import { DataFilms } from '../types/film';
import { loadFilms } from './actions';

export const fetchFilmsnAction = createAsyncThunk(
  'data/fetchFilms',
  async () => {
    const {data} = await api.get<DataFilms>(APIRoute.Films);
    store.dispatch(loadFilms(data));
  },
);
