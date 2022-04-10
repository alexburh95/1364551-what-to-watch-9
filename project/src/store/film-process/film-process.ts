import { createSlice } from '@reduxjs/toolkit';
import { FilmsOnPage, NameSpace } from '../../consts';

import { FilmProcess } from '../../types/state';

const initialState: FilmProcess = {
  currentGenre: 'All genres',
  maxFilms: FilmsOnPage.Initial,
};

export const filmProcess = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.currentGenre = action.payload;
      state.maxFilms = FilmsOnPage.Initial;
    },
    addFilms: (state) =>{
      state.maxFilms += FilmsOnPage.MaxPerStep;
    },
    resetMaxFilms: (state) => {
      state.maxFilms = FilmsOnPage.Initial;
    },
  },
});

export const {changeGenre, addFilms, resetMaxFilms} = filmProcess.actions;
