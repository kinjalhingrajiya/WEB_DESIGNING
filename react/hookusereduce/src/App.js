import { useReducer } from "react";
function App() {
  const val={count:0}
  const reduce = (state,action)=>{
    switch(action.type)
    {
      case "increment" :  return {count:state.count+1}
      case "decrement" : return {count:state.count-1}
      default : console.log("invalid");
    }

  }
  const [state,dispatch] =  useReducer(reduce,val);

function increment()
{
    dispatch({type:"increment"});
}
function decrement()
{
  dispatch({type:"decrement"});
}
  return (
    <div className="App">
     <h1>{state.count}</h1>
     <button onClick={increment}>Increment</button>
     <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
