import { useEffect, useRef, useState } from "react";


function App() {
  const [name,setname]= useState("");
  const count = useRef(0);
  function changeName(e)
  {
    setname(e.target.value)
  }
  useEffect(()=>{
    count.current = count.current +1;
  })
  
  return (
    <div className="App">
      <input onChange={changeName}/>
      <h1>Name : {name}</h1>
      {/* <h1>Render:{count}</h1> */}
      <h1>Render:{count.current}</h1>
    </div>
  );
}

export default App;
