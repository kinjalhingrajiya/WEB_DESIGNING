import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import './style.css';
import Content from './content.js'
import Footer from './footer';
import App from './app.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Header/>
<Content name="Prinjal"/>
<App/>
<Footer/>

  </React.StrictMode>
);


