
export type starring= string;

export type Film = {
  id: number;
  starring: starring[];
  posterImage: string;
  videoLink: string;
  backgroundImage: string;
  genre: string;
  released: number;
  name: string;


};


export type DataFilm = {
id: number
name: string
posterImage: string
previewImage: string
backgroundImage: string
backgroundColor: string
videoLink: string
previewvideoLinkLink: string
description: string
rating: number
scoresCount: number
director: string
starring: [string]
runTime: number
genre: string
released: number
isFavorite: boolean
}

export type FilmCards = Film[];

export type DataFilms = DataFilm[];
