import CartItem from "./cartItem";
import "./cart.css";

export default function CartList({ cart, onIncrease, onDecrease }) {
  return (
    <section className="cart">
      <h2>Cart</h2>
      <ul className="cartItems">
        {cart.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            item={cartItem}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />
        ))}
      </ul>
    </section>
  );
}
