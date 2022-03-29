import {createAction} from '@reduxjs/toolkit';
import { DataFilms } from '../types/film';


export const changeGenre = createAction<string>('changeGenre');
export const loadFilms = createAction<DataFilms>('data/loadFilms');
export const setError = createAction<string>('setError');
