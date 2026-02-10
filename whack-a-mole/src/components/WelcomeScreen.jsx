export default function WelcomeScreen({ onPlay, lastScore }) {
  return (
    <div>
      <h1>Whack-A-Mole</h1>
      <h4>Welcome to Whack-A-Mole</h4>
      <h4>Whack a mole to earn points</h4>
      <h4>How many points can you get?</h4>
      {lastScore > 0 && <p>Last Score: {lastScore}</p>}
      <button onClick={onPlay}>Play</button>
    </div>
  );
}
