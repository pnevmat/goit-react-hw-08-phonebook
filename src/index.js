import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store from './redux/store';
import PhoneBook from './App'

import 'modern-normalize/modern-normalize.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <React.StrictMode>
        <BrowserRouter>
          <PhoneBook />
        </BrowserRouter>
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
