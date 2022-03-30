import {createAction} from '@reduxjs/toolkit';
import { Films } from '../types/film';


export const changeGenre = createAction<string>('changeGenre');
export const loadFilms = createAction<Films>('data/loadFilms');
export const setError = createAction<string>('setError');
