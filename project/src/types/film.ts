
export type starring= string;


export type Film = {
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

export type Films = Film[];

export type FilmStatus = {
  filmId: string;
  status: number;
  isPromo: boolean;
};
