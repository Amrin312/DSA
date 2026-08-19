import React, { useEffect, useState } from "react";

function App() {
  const [seconds, setSeconds] = useState(30);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsRunning(false);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  const handleResend = () => {
    // API call to resend OTP
    console.log("OTP Resent");

    setSeconds(30);
    setIsRunning(true);
  };

  return (
    <div>
      {isRunning ? (
        <p>Resend OTP in {seconds} seconds</p>
      ) : (
        <p>You can resend OTP</p>
      )}

      <button
        onClick={handleResend}
        disabled={isRunning}
      >
        Resend OTP
      </button>
    </div>
  );
}

export default App;