import React from 'react';
import { useState, useEffect, useRef } from 'react'

function App() {
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState();
  const [isRunning, setIsRunning] = useState(false);

  const setTimer= () => {
    setTime(duration);
    setIsRunning(true);
    setDuration('');
  }

  useEffect(() => {
    if(!isRunning || time === 0) return 
      const interval = setInterval(() => {
        setTime(prev => prev -1);
      }, 1000);


    return () => clearInterval(interval);

  }, [isRunning]);

  const handleReset = () => {
    setIsRunning(false);
    setDuration('');
    setTime(0);
  }

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);

  return (
    <div>

      <h1>Timer</h1>

      <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
      <button onClick={setTimer}>Set Timer</button>
       <br />
      <div>{time}</div>

      <br />
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>

    </div>
  )
}

export default App
