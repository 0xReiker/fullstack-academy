export default function CartList({ cart }) {
  return (
    <section className="cart">
      <ul className="cartItems">
        {cart.map((cartItem) => (
          <li key={cartItem.id} className="cartItem">
            {cartItem.image}
            {cartItem.name}
            Quantity: {cartItem.quantity}
          </li>
        ))}
      </ul>
    </section>
  );
}
