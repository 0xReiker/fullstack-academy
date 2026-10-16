import Mole from "./Mole";

export default function Hole({ hasMole, onMoleClick }) {
  return (
    <div className="hole">{hasMole && <Mole onClick={onMoleClick} />}</div>
  );
}
