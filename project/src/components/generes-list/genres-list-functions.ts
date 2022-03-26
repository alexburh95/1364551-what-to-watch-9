import { DEFAULT_GENRE } from '../../consts';
import { Film, FilmCards } from '../../types/film';

export  const createGeneres = (array: FilmCards) => {
  const mySet = new Set<string>();
  mySet.add(DEFAULT_GENRE);
  array.forEach((element) => {
    const {genre} = element;
    mySet.add(genre);


  });

  const genresList = [...mySet];
  return genresList;


};

export const chooseGenre =(value:string, array:FilmCards) => {


  const checkGenre =(element:Film) => {

    const {genre} = element;


    if(value === genre){

      return element;
    }
  };

  if(value === DEFAULT_GENRE){

    return array;
  }
  else{
    const filteredArray = array.filter(checkGenre);
    return filteredArray;
  }
};

