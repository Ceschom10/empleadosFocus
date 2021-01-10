import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Firebase/firebase'
import { Auth0Provider } from '@auth0/auth0-react'

const domain = 'dev-focus-react.us.auth0.com';
const clientId = 'YewUtX1hoMBL71Ch0muF2FRhZVU5705j';
const redirectUri = window.location.origin

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain={domain} clientId={clientId} redirectUri={redirectUri}>
      <App/>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
