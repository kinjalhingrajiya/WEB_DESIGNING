import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Axioscall from './axioscall';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Axioscall/>
  </React.StrictMode>
);

