import { useState } from 'react';
import AddTodo from './Addtodos';
import TaskList from './Tasklist';

let nextId =4;
const intialTodos = [
  {id:1,title:"Apple"},
  {id:2,title:"Milk"},
  {id:3,title:"Bread"}
]

function App() {

 const[todos,setTodos] = useState(intialTodos)

function handleAddTodo(title)
{
  setTodos([
    ...todos,
    {
      id:nextId++,
      title:title
    }
  ])
}

function handleChangeTodo(nextTodo)
{
  setTodos(todos.map((t)=>{
    if(t.id == nextTodo.id)
    {
      return nextTodo;
    }

    else
    {
      return t;
    }

  }))
}


function handleDeleteTodo(todoId)
{
  setTodos(todos.filter((t)=>{
    return t.id!==todoId
  }))
}


  return (
    <div className="App">
     <AddTodo onAddTodo={handleAddTodo}/>
    <TaskList
    todos={todos}
    onChangeTodo={handleChangeTodo}
    onDeleteTodo={handleDeleteTodo}

    />
    
    </div>
  );
}

export default App;