import { useReducer} from "react";
import AddTodo from "./addtodo";
import TaskList from "./tasklist";



let nextid=3;
const initialval=[{
    id:"0",
    title:"apple"
},
{
    id:"1",
    title:"banana"
},
{
    id:"2",
    title:"grapes"
}]
function tasksReducer(tasks, action) {
    switch (action.type) {
      case 'added': {
        return [...tasks, {
          id: action.id,
          title: action.title,
        }];
      }
      case 'changed': {
        return tasks.map(t => {
          if (t.id === action.tasks.id) {
            return action.tasks;
          } else {
            return t;
          }
        });
      }
      case 'deleted': {
        return tasks.filter(t => t.id !== action.id);
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }
  export default function TaskApp() {
    const [tasks, dispatch] = useReducer(
      tasksReducer,
      initialval
    );
  
    function handleAddTask(title) {
      dispatch({
        type: 'added',
        id: nextid++,
        title: title,
      });
    }
  
    function handleChangeTask(nexttodo) {
      dispatch({
        type: 'changed',
        tasks: nexttodo
      });
    }
  
    function handleDeleteTask(todoid) {
      dispatch({
        type: 'deleted',
        id: todoid
      });
    }
  
    return (
      <>
        <h1>Todo List</h1>
        <AddTodo
          onAddTodo={handleAddTask}
        />
        <TaskList
          todos={tasks}
          onChangeTodo={handleChangeTask}
          onDeleteTodo={handleDeleteTask}
        />
      </>
    );
  }

