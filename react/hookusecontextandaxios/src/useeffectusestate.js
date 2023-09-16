import { useState,useEffect } from 'react';
function Test()
{

  const [data,setData] = useState(0);
  const [data1,setData1] = useState(5);

  // console.log(data);

  useEffect(()=>{
     
      document.title = ("new Messages   "+ data);

  },[data]);


  return (
    <>
   
      <h1>{data} new messages..!</h1>
      <h1>{data1} new messages..!</h1>

      <button onClick={()=>{setData(data+1)}}>CLICK</button>

      <button onClick={()=>{setData1(data1+5)}}>CLICK1</button>

    </>
  )
}

function App1() {
  return (
    <div className="App">

<h1><u>Use Effect and use State</u> </h1>
      < Test/>
    
    </div>
  );
}

export default App1;