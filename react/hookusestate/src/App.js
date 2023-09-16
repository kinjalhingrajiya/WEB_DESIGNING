import { useState } from "react";
import React from "react";

function App() {

   const x= useState("kinjal")
   let [y,sety] =useState("priyank")
  return (
    <>
    <button onClick={()=>{sety(y="patel")}} >click me</button>
    <h1>{x}</h1>
    <h1>{y}</h1>
    </>
  );
}

export default App;
