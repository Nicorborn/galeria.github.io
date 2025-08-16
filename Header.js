import React from "react";
import { useSelector } from "react-redux";

export default function Header({ goToProducts, goToCart }) {
  const total = useSelector((state) => state.cart.total);

  return (
    <header className="header">
      <h2 className="logo" onClick={goToProducts}>
        🌱 GreenLife
      </h2>
      <nav>
        <button onClick={goToProducts}>Productos</button>
        <button onClick={goToCart}>🛒 ({total})</button>
      </nav>
    </header>
  );
}
