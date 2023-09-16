import {useEffect, useState} from 'react';

function App() {
  const [count,setcount] = useState(0);
  const [count1,setcount1] = useState(100)

  useEffect(
    ()=>{console.log("clicked")},[count]   
     //second argument is a dependancy array only count state useEffect will be called 
  )
  return (
 <>
 <h1>{count}</h1>
 <h1>{count1}</h1>

  <button onClick={()=>{setcount(count+1)}}>update Increment</button>
  <button onClick={()=>{setcount1(count1-1)}}>update Decrement</button>
 </>
  )
}
export default App;


