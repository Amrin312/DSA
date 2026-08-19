import React, { useEffect, useState } from "react";

function App() {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let timer;

    const resetTimer = () => {
      setIsIdle(false);

      clearTimeout(timer);

      timer = setTimeout(() => {
        setIsIdle(true);
      }, 3000); // 30 seconds
    };

    const events = [
      "mousemove",
      "keydown",
      "click",
      "scroll",
      "touchstart"
    ];

    events.forEach((event) => {
      window.addEventListener(event, resetTimer);
    });

    // Start the timer initially
    resetTimer();

    return () => {
      clearTimeout(timer);

      events.forEach((event) => {
        window.removeEventListener(event, resetTimer);
      });
    };
  }, []);

  return (
    <div>
      {isIdle ? (
        <h2>User is idle</h2>
      ) : (
        <h2>User is active</h2>
      )}
    </div>
  );
}

export default App;