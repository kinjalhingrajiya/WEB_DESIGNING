import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Parent from './propsjsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <React.StrictMode >
    <App/>
    <Parent/>
    </React.StrictMode>
);