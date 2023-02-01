import './App.css';
import { useState } from 'react';
import { React } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Update</button>
    </div>
  );
};

export default App;
