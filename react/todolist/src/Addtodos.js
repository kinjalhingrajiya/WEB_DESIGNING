import React, { useState } from 'react'
export default function Addtodo({onaddtodo})
  {

  const [title,setTitle] = useState('');
  return(<>
    <input type="text" value={title} onchange={(e)=>{setTitle(e.target.value)}}/>
    <button onClick={()=>onaddtodo(title)}>Add</button>
  </>)
  }