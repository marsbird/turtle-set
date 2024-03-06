import React from 'react';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App.jsx';
import store from './store.js';

const root = createRoot(document.querySelector('#root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
