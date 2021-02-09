/** @jsxRuntime classic */
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
// above code required for ie11 support

import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import App from './App';
import { AuthProvider } from './routes/authStateProvider/authContext';

import './index.css';
import '@tourmalinecore/react-table-responsive/es/index.css';
import '@tourmalinecore/react-tc-modal/es/index.css';
import '@tourmalinecore/react-tc-ui-kit/es/index.css';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
