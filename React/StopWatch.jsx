import React from 'react';
import { useState, useEffect, useRef } from 'react'

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if(isRunning){
      intervalRef.current = setInterval(() => {
        setTime(prev => prev + 1);
        // console.log(time);
      }, 1000);
    }else{
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

const handleStart = () => setIsRunning(true);
const handleStop = () => setIsRunning(false);
const handleResume = () => setIsRunning(true);

const handleReset = () =>{
  setTime(0);
   setIsRunning(false);
}


const handleFormat = (seconds) => {
  const hrs = String(Math.floor(seconds/3600)).padStart(2,"0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const sec = String(Math.floor(seconds % 60)).padStart(2, "0");

  return `${hrs}:${mins}:${sec}`;
}

  return (
    <div>
      {handleFormat(time)}

      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleResume}>Resume</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default App
