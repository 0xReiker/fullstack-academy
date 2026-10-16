import { useState } from "react";
import PLANTS from "./data";
import PlantsList from "./plants/plantsList";
import CartList from "./cart/cartList";

export default function App() {
  const [cart, setCart] = useState([]);

  const increaseQuantity = (plant) => {
    const itemExists = cart.find((item) => item.id === plant.id);
    if (itemExists) {
      setCart(
        cart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      const item = { ...plant, quantity: 1 };
      setCart([...cart, item]);
    }
  };

  const decreaseQuantity = (plant) => {
    const itemExists = cart.find((item) => item.id === plant.id);
    if (itemExists) {
      setCart(
        cart
          .map((item) =>
            item.id === plant.id
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          )
          .filter((item) => item.quantity >= 1),
      );
    }
  };

  return (
    <>
      <header>
        <h1>Proper Plants</h1>
      </header>
      <main>
        <PlantsList addToCart={increaseQuantity} />
        <CartList
          cart={cart}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
        />
      </main>
    </>
  );
}
