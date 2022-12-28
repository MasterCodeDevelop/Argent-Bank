import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router/index';
import './assets/scss/index.scss';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
