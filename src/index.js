import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useDispatch } from 'react-redux';
import { store } from './app/store';
import { fetchUsers } from './features/users/userSlice';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

store.dispatch(fetchUsers());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);