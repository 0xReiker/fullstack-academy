import { useState } from "react";
import Hole from "./Hole";

export default function GameArea({ score, setScore, onRestart, timer }) {
  const holes = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const [molePosition, setMolePosition] = useState(0);

  function handleMoleClick() {
    setScore(score + 1);

    const newPosition = Math.floor(Math.random() * 9);
    setMolePosition(newPosition);
  }

  return (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <h2>Score: {score}</h2>
        <h2>Time: {timer}</h2>
        <button onClick={onRestart}>Restart</button>
      </header>

      <div className="field">
        {holes.map((holeIndex) => (
          <Hole
            key={holeIndex}
            hasMole={holeIndex === molePosition}
            onMoleClick={handleMoleClick}
          />
        ))}
      </div>
    </div>
  );
}
