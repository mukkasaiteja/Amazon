import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Auth0Provider } from '@auth0/auth0-react';

import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from './components/Main/Mycontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Auth0Provider
    domain="dev-w7ydpb35gko5a0jf.us.auth0.com"
    clientId="Vs1qEqPxBJTsCDPn5QN21pEOaTmPdlN8"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
<BrowserRouter>
<DataProvider>
    <App />
    </DataProvider>
    </BrowserRouter>
      </Auth0Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

