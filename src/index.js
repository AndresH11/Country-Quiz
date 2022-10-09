import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { Provider } from 'react-redux'
import { storage } from './app/storage';


createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <Provider store={ storage }>
      <App />
    </Provider>
  </React.StrictMode>
)
