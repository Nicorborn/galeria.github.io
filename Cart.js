import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, remove } from "../redux/cartSlice";

export default function Cart({ goToProducts }) {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="cart">
      <h1>🛒 Carrito de Compras</h1>

      {items.length === 0 && <p>Tu carrito está vacío.</p>}

      {items.map((p) => (
        <div key={p.id} className="cart-item">
          <img src={p.img} alt={p.name} width="80" />
          <div>
            <h3>{p.name}</h3>
            <p>${p.price} c/u</p>
            <p>Cantidad: {p.quantity}</p>
            <button onClick={() => dispatch(increment(p.id))}>+</button>
            <button onClick={() => dispatch(decrement(p.id))}>-</button>
            <button onClick={() => dispatch(remove(p.id))}>❌</button>
          </div>
        </div>
      ))}

      <h2>Total: ${totalPrice}</h2>
      <button disabled>💳 Pagar (Próximamente)</button>
      <button onClick={goToProducts}>⬅ Seguir comprando</button>
    </div>
  );
}
