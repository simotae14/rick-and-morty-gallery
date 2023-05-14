import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { ApolloWrapper } from './ApolloWrapper';

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <ApolloWrapper>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ApolloWrapper>
);
