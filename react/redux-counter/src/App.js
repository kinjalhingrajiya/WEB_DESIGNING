
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Decrement, Increment } from './action';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.count);

return (
  <div className="App">
  <button onClick={()=>{dispatch(Increment())}}>+</button>
    {counter}
  <button onClick={()=>{dispatch(Decrement())}}>-</button>
  </div>
  )
}

export default App;
