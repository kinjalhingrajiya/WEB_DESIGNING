import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Objwithusestate from './usestateobject';
import Usestateinbool from './usestateinbool';
import Details from './task.js';
import TodoList from './add.js'
import Counter from './counterwithusestate.js' 
import ResetKey from './keyresetusingusestate';
import Counter1 from './assignment';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
  <Objwithusestate/>
  <Usestateinbool/>
   <Details/>
  <TodoList/>
  <Counter/>
  <Counter1/>
  <ResetKey/>
  </React.StrictMode>
);