import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import autho0Config from "./auth0config.json"
import { TaskDataProvider } from './Context/TaskDataContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={autho0Config.domain}
      clientId={autho0Config.clientId}
      redirectUri={window.location.origin}
      audience={autho0Config.audience}
      useRefreshTokens={true}
      cacheLocation={"localstorage"}>
      <TaskDataProvider>
    <App />
      </TaskDataProvider>
    </Auth0Provider>
  </React.StrictMode>

)
console.log(window.location.origin);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();