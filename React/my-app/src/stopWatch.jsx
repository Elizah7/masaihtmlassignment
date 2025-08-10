import React, { useState, useEffect, useRef } from "react";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // Sound effect (free online beep sound)
  const beepSound = new Audio("https://www.soundjay.com/button/beep-07.wav");

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    // Cleanup on unmount
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  useEffect(() => {
    if (seconds === 10) {
      beepSound.play().catch(() => console.log("Beep sound played"));
      console.log("10 seconds reached!");
    }
  }, [seconds]);

  const startStopwatch = () => setIsRunning(true);
  const stopStopwatch = () => setIsRunning(false);
  const resetStopwatch = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial" }}>
      <h1>Stopwatch</h1>
      <h2>{seconds} seconds</h2>
      <button onClick={startStopwatch} style={btnStyle}>Start</button>
      <button onClick={stopStopwatch} style={btnStyle}>Stop</button>
      <button onClick={resetStopwatch} style={btnStyle}>Reset</button>
    </div>
  );
};

const btnStyle = {
  padding: "10px 15px",
  margin: "5px",
  fontSize: "16px",
  cursor: "pointer",
};

export default Stopwatch;
