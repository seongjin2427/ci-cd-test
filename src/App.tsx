import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  console.log(count);

  const increaseCount = () => setCount((prev) => prev + 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>Count + 1</button>
    </div>
  );
}

export default App;
