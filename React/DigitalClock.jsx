import React from 'react';
import { useState, useEffect, useRef } from 'react'

function App() {
  
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);


  return (
    <div>

      <div>{time.toLocaleTimeString()}</div>

    </div>
  )
}

export default App
