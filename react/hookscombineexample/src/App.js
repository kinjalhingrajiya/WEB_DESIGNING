import { useState } from "react";
import Modalbox from "./Modalbox";
import Intersectionmethod from "./Intersectionmethod";


function App() {

  const[show,setshow]=useState(false)
  return (
    <>
    <div className="App">
   <button onClick={()=>{setshow(true)}}>OpenModal</button>
   <Modalbox isopen={show}>
    Hello....
    <button onClick={()=>{setshow(false)}}>Close</button>
   </Modalbox>
    </div>
    <Sections/>
<Intersectionmethod/>
<Sections/>
    </>
  );
}
function Sections()
{
  const items =[];
  for(let i=0;i<50;i++)
  {
    items.push(<li key={i}> {i} Scroll...! </li>)
  }

  return (
    <ul>
      {items}
    </ul>
  )

}
export default App;
