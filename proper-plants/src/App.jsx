import { useState } from "react";
import PLANTS from "./data";

export default function App() {
  const [plants] = useState(cart);

  return (
    <>
      <header>
        <h1>Proper Plants</h1>
      </header>
      <main></main>
    </>
  );
}
