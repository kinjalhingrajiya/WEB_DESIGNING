import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { userdata } from "./user";
import { Showdataintable } from "./task3";
import { Mousemove } from "./mousemove";
import { Showdata } from "./task2";
import { Getimage } from './task4getimage';
import { Scrolltop_event } from './task5';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Showdata/>
    <Mousemove/>
    <Showdataintable alldata={userdata}/>
    <Getimage/>
    <Scrolltop_event/>
  </React.StrictMode>
  
);

