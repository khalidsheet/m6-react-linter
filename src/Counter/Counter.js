import './../App.css';
import { React } from 'react';
import { useState } from 'react';

export const Counter = ({ initialCount = 0 }) => {
  const [counter, setCounter] = useState(parseInt(initialCount));

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <div data-testid="counter">{counter}</div>
      <button data-testid="increase" onClick={increaseCounter}>
        Increase Counter
      </button>
    </div>
  );
};
