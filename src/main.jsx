import React from 'react';
import { createRoot } from "react-dom/client"
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


import App from './App';
import { store, } from './store/store';

import './index.scss';


const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
