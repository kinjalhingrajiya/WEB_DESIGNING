import React, { useState } from 'react';

const initialtodo = [
  { id: 1, title: 'html' },
  { id: 2, title: 'css' },
  { id: 3, title: 'js' },
  { id: 4, title: 'jquery' },
];

function App() {
  const [todos, settodos] = useState(initialtodo);
  const [task, settask] = useState('');
  const [isediting, setisediting] = useState('');
  const [editText, seteditText] = useState('');
  const [completedTasks, setCompletedTasks] = useState([]);

  const addtodo = () => {
    if (task.trim() !== '') {
      const newTodo = {
        id: todos.length + 1,
        title: task,
      };
      settodos([...todos, newTodo]);
      settask('');
    } else {
      alert('Please add a task.');
    }
  };

  const deleteTodo = (id) => {
    const updatedTodo = todos.filter((todo) => todo.id !== id);
    settodos(updatedTodo);
  };

  const editTodo = (id, text) => {
    seteditText(text);
    setisediting(id);
  };

  const saveTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title: editText } : todo
    );
    settodos(updatedTodos);
    setisediting(null);
  };

  const onCheck = (id, text) => {
    const completedTodo = todos.find((todo) => todo.id === id);
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setCompletedTasks([...completedTasks, completedTodo]);
    settodos(updatedTodos);
  };

  return (
    <div>
      <h1>To do list</h1>
      <input type="text" value={task} onChange={(e) => settask(e.target.value)} />
      <button onClick={addtodo}>Add</button>
      {todos.map((el) => (
        <ul key={el.id}>
          <li>
            {isediting === el.id ? (
              <div>
                <input type="text" value={editText} onChange={(e) => seteditText(e.target.value)} />
                <button onClick={() => saveTodo(el.id)}>Save</button>
              </div>
            ) : (
              <div>
                <input type="checkbox" onChange={() => onCheck(el.id, el.title)} />
                {el.title}
                <button onClick={() => editTodo(el.id, el.title)}>Edit</button>
                <button onClick={() => deleteTodo(el.id)}>Delete</button>
              </div>
            )}
          </li>
        </ul>
      ))}
      <h1>Completed Task</h1>
      <ul>
        {completedTasks.map((completedTask) => (
          <li key={completedTask.id}>{completedTask.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;