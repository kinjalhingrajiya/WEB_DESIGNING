import { useState } from "react";
function Counter1() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'blue',
      }}
    >
      <h1 style={{ color: 'white' }}>Counter</h1>
      <p style={{ color: 'white', fontSize: '24px' }}>{count}</p>
      <div>
        <button onClick={increment} style={{margin:'10px'}}>Increment</button>
        <button onClick={decrement} style={{margin:'10px'}}>Decrement</button>
        <button onClick={reset} style={{margin:'10px'}}>Reset</button>
      </div>
    </div>
  );
}

export default Counter1;
