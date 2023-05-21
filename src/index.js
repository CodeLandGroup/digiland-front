import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/reset.css'
import './assets/css/index.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import serviceWorkerDev from './ServiceWorkerDev';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

serviceWorkerDev();