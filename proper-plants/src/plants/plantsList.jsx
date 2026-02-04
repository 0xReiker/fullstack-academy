import PLANTS from "../data.js";

export default function PlantsList() {
  return (
    <section className="plants">
      <h3>Plants</h3>
      <ol>
        {PLANTS.map((plant) => (
          <li
            className={"plant"}
            key={plant.id}
            //onClick={() => }     <<< For later
          >
            {plant.image}
            {plant.name}
          </li>
        ))}
      </ol>
    </section>
  );
}
