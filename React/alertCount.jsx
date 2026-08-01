import React from 'react';
import { useState, useRef, useEffect } from 'react'

function App() {

  const [count, setCount] = useState(0);
  const currentCountRef = useRef(0);

  const handleCount = () => {
    setCount(prev => prev + 1);
    currentCountRef.current = currentCountRef.current + 1;
  }

  const isALerted = () => {
    return setTimeout(() => {
      alert(currentCountRef.current);
    }, 1000);
  }

  return (
    <div>
      <h1>Count with alert</h1>
      <p>{count} </p>
     
     <button onClick={() => handleCount()}>Increment</button>
     <button onClick={() => isALerted()}>Alert</button>
     
    </div>
  )
}

export default App
