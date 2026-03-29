import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <button onClick={() => setValue(count => count + 1)}>+</button>
      <p>{value}</p>
      <button onClick={() => setValue(count => count - 1)}>-</button>
    </div>
  );
}

export default App;
