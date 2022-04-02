import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import {Provider} from 'react-redux';
import { store } from './store';
import ErrorMessage from './components/error-message/error-message';
import { checkAuthAction, fetchFilmsnAction, fetchPromoFilmAction } from './store/api-actions';


store.dispatch(fetchFilmsnAction());
store.dispatch(checkAuthAction());
store.dispatch(fetchPromoFilmAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorMessage />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
