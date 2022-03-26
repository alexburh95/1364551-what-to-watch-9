import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from './mocks/film';
import {Provider} from 'react-redux';
import { store } from './store';
import { Film, FilmCards } from './types/film';

const startSettings = {
  title : 'The Grand Budapest Hotel',
  genre : 'Drama',
  realizeYear: 2014,

};

const createGeneres = (array: FilmCards) => {
  const mySet = new Set();
  array.forEach((element) => {
    const {genre} = element;
    mySet.add(genre);


  });

  // eslint-disable-next-line no-console
  console.log(mySet);
  const genresList = [...mySet];

  // eslint-disable-next-line no-console
  console.log(genresList);
  return genresList;


};

createGeneres(films);


export const chooseGenre =(value:string, array:FilmCards) => {


  const checkGenre =(element:Film) => {

    const {genre} = element;


    if(value === genre){

      return element;
    }
  };

  if(value === 'All genres'){

    return array;
  }
  else{
    const filteredArray = array.filter(checkGenre);
    return filteredArray;
  }
};


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App title={startSettings.title}
        genre = {startSettings.genre} relizeYear={startSettings.realizeYear}
        films={films}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
