import { DEFAULT_GENRE } from '../../consts';
import { Film, FilmCards } from '../../types/film';

const getGenre = (film:Pick<Film,'genre'>)=>film.genre;
export  const createGeneres = (films: Film[]) => [...new Set(films.map(getGenre))];

const createFilter = (genre:string)=>(film:Pick<Film,'genre'>)=>film.genre===genre;

export const chooseGenre =(value:string, array:FilmCards) => value === DEFAULT_GENRE ? array : array.filter(createFilter(value));

