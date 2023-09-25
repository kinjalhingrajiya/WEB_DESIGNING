import React, { useState } from 'react'

function TaskList({todos,onChangeTodo,onDeleteTodo}) {
  return (
    <div>
        <ul>
            {todos.map((todo)=>(
                <li>
                   <Task
                     todo={todo}
                    onChange={onChangeTodo}
                    onDelete={onDeleteTodo}
                   />
                </li>
            ))}
        </ul>
      
    </div>
  )
}


function Task({todo,onChange,onDelete})
{

    const [edit,setEdit] = useState(false);
    let content;
    if(edit)
    {
        content  = <>
        <input
        value={todo.title}
        onChange={(e)=>{
            onChange({
                ...todo,
                title:e.target.value
            })
        }}
        />
        <button onClick={()=>{setEdit(false)}}>Save</button>
        </>
    }

    else 

    {
       content = <>
       {todo.title}
       <button onClick={()=>{setEdit(true)}}>Edit</button>
       </>
    }

return(
    <>
        {content}
        <button onClick={()=>{onDelete(todo.id)}}>Delete</button>
    </>
)
}

export default TaskList;