import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store}from './redux/store'
import { App } from 'components/App';
import{GlobalStyle} from './GlobalStyle'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="goit-react-hw-08-phonebook">
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);







