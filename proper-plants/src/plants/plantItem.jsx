import "./plants.css";

export default function PlantItem({ item, addToCart }) {
  return (
    <li className="PlantItem">
      <span>{item.image}</span>
      <span>{item.name}</span>

      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </li>
  );
}
