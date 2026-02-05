export default function CartItem({ item, onIncrease, onDecrease }) {
  return (
    <li className="cartItem">
      <span>{item.image}</span>
      <span>{item.name}</span>
      <span>{item.quantity}</span>

      <button onClick={() => onIncrease(item)}>+</button>
      <button onClick={() => onDecrease(item)}>-</button>
    </li>
  );
}
