import PLANTS from "../data.js";
import PlantItem from "./plantItem.jsx";
import "./plants.css";

export default function PlantsList({ addToCart }) {
  return (
    <section className="plants">
      <h3>Plants</h3>
      <ol>
        {PLANTS.map((plant) => (
          <PlantItem key={plant.id} item={plant} addToCart={addToCart} />
        ))}
      </ol>
    </section>
  );
}
