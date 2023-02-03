import './App.css'
import { useState } from 'react'
import { React } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div className="App">
      <div data-testid="counter">{counter}</div>
      <button data-testid="increase" onClick={() => setCounter(counter + 1)}>
        Increase
      </button>
    </div>
  )
}

export default App
