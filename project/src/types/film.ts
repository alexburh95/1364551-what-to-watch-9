
export type artist= string;

export type Film = {
  id: number;
  artist: artist[];
  picture: string;
  video: string;
  cover: string;
  genre: string;
  realizeYear: number;
  title: string;


};

export type FilmCards = Film[];
