import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import {Provider} from 'react-redux';
import { store } from './store';
import ErrorMessage from './components/error-message/error-message';
import { fetchFilmsnAction } from './store/api-actions';


const startSettings = {
  title : 'The Grand Budapest Hotel',
  genre : 'Drama',
  realizeYear: 2014,

};


store.dispatch(fetchFilmsnAction());


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorMessage />
      <App title={startSettings.title}
        genre = {startSettings.genre} relizeYear={startSettings.realizeYear}

      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
