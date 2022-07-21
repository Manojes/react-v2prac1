import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {Provider} from 'react-redux';
import store from './store/indexx'
import App from './App';
import Counter from './Components/Counter'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
  <StrictMode>
    <App />
    <Counter/>
  </StrictMode>
    </Provider>
);
