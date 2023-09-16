import Navbar from "./componants/Navbar";
import Textform from "./componants/Textform";
import About from "./componants/About";
import './App.css';
import React, { useState } from 'react';



function App() {
   const [mode, setmode] = useState('light');
   const togglemode=()=>
   {
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white';

    }
    else
    {
      setmode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }
   }
  return (
    <><Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
    <About/>
    <div className="container my-3"><Textform heading="Enter the Text to Analize" mode={mode}/></div>
    </>
  );
}
export default App;
