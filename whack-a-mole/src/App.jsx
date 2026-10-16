import { useState, useEffect, useRef } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import GameArea from "./components/GameArea";

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(15);
  const intervalRef = useRef(null);

  //When play hit, setPlay>true (GameArea), set score 0 and start timer at 15
  function handlePlay() {
    setIsPlaying(true);
    setScore(0);
    setTimer(15);
  }

  //On restart, setPlaying to false (WelcomeScreen) and clear timer
  function handleRestart() {
    setIsPlaying(false);
    clearInterval(intervalRef.current);
  }

  //Timer logic
  useEffect(() => {
    //only interval if playing and timer is above 0
    if (isPlaying && timer > 0) {
      intervalRef.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000); //1000ms for 1s timer countdown
    }

    // Stop when timer hits 0
    if (timer === 0) {
      clearInterval(intervalRef.current);
      setIsPlaying(false); //game over and return to home screen1
    }

    // Cleanup - clear interval when this effect re-runs or component unmounts
    // I didn't know what this was. needed LLM agent to help me understand this part
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isPlaying, timer]); // Re-run when these change

  return (
    <div style={{ padding: "20px" }}>
      {isPlaying ? (
        <GameArea
          score={score}
          setScore={setScore}
          timer={timer}
          onRestart={handleRestart}
        />
      ) : (
        <WelcomeScreen onPlay={handlePlay} lastScore={score} />
      )}
    </div>
  );
}
