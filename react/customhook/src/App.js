import { useEffect, useState } from "react";
import Usewindowlisner from "./usewindowlisner";


function App() {

const [pos,setpos]=useState({x:0,y:0})
  Usewindowlisner('mousemove',(e)=>{
    setpos(
      {
        x:e.clientX,
        y:e.clientY
      }
    )
    });
  return (
    <>
    <div style={
      {height:"20px",
    width:"20px",
    background:"black",
    borderRadius:"20px",
    transform:`translate(${pos.x}px,${pos.y}px)`
    }}></div>
    </>
  );
}

export default App;
