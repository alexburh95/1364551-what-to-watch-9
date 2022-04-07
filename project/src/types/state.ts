import { AuthorizationStatus } from '../consts';
import { Films, Film } from './film';
import { Reviews } from './reviews';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  error: string,
}

export type FilmData = {
  films: Films,
  likeFilms : Films,
  reviews: Reviews,
  favoriteFilms: Films,
  promoFilm: Film | object,
  currentFilm: Film | object,
  isDataLoaded: boolean,
  sendingReview: boolean,
}

export type FilmProcess = {
  currentGenre: string,
  maxFilms: number,
}
