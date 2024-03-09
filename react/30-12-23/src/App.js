
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"

export default function App() {
  const counter = useRef(0)
  const handleClick = () => {
    counter.current = counter.current + 1
  }
  return (
    <div>
      <h1>Counter: {counter.current}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}