import React, { useEffect } from 'react';


function Usewindowlisner(eventtype,functionname) {
    useEffect(()=>{
        window.addEventListener(eventtype,functionname)},[eventtype,functionname])
  return (
    <div>
      
    </div>
  )
}

export default Usewindowlisner
