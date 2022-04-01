import {createAction} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../consts';
import { Films } from '../types/film';


export const changeGenre = createAction<string>('changeGenre');
export const loadFilms = createAction<Films>('data/loadFilms');
export const setError = createAction<string>('setError');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const addFilms = createAction('data/addFilms');
