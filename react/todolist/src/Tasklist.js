
import { useState } from "react";
import React from 'react';
function Task(todo,onchange,ondelete)
{
        const[edit,setedit]=useState(false);
        let content;
        if(edit)
        {
            content = <>
            <input type="text" value={todo.title} onChange={()=>{onchange({...todo,title:edit.target.value})}} />
            <button onClick={()=>{setedit(false)}}>save</button>
            </>
        }
        else{
            content = <>
            {todo.title}
            <button onClick={()=>{setedit(true)}}>Edit</button>
            </>
        }
        return(
            <>
             {content}
            <button onClick={()=>{ondelete(todo.id)}}>Delete</button>
            </>
        )
}

export default function Tasklist(todos,onchangetodos,ondeletetodos)
{
    return(<>
   <ul>
        {todos.map((todo)=>(
            <li key={todo.id}>
                <Task todo={todo}
                onchange={onchangetodos}
                ondelete={ondeletetodos}/>
            </li>
        ))}
   </ul>

    </>)
}