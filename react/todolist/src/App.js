import React from 'react'
import { useState } from "react";
import Tasklist from "./Tasklist";
import Addtodo from "./Addtodos";

let nextid=3;
let initialtodo=[{
  id:0,
  title:"Apple"
},
{
  id:1,
  title:"Banana"
},
{
  id:2,
  title:"Orange"
}]
 function App()
{
  const[todos,settodos] = useState(initialtodo)
  
  function handleaddtodos(title)
  {
      settodos([ 
        ...todos,
        {
       
        id:nextid++,
        title:title
        }
      ])
  }
  function handlechangetodos(nexttodos)
  {
    
      settodos(todos.map((t)=>{
        if(t.id===nexttodos.id)
        {
          return nexttodos;
        }
        else
        {
          return t;
        }}
      ))
  }
  function handledeletetodos(todosid)
  {
    settodos(todos.filter((t)=>
    {
        return t.id!==todos.id;
    }))
  }
return(<>
<Addtodo onaddtodos={handleaddtodos}/>
<Tasklist todos={todos} onchangetodos={handlechangetodos} ondeletetodos={handledeletetodos}/>


</>)
}
export default App;