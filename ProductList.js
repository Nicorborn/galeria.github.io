import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const products = [
  { id: 1, name: "Monstera", price: 20, category: "Grandes", img: "https://i.imgur.com/QK0f9Yv.jpg" },
  { id: 2, name: "Cactus", price: 10, category: "Pequeñas", img: "https://i.imgur.com/2g3OeYh.jpg" },
  { id: 3, name: "Ficus", price: 25, category: "Grandes", img: "https://i.imgur.com/32HwMfQ.jpg" },
  { id: 4, name: "Suculenta", price: 8, category: "Pequeñas", img: "https://i.imgur.com/xq9syYk.jpg" },
  { id: 5, name: "Orquídea", price: 30, category: "Florales", img: "https://i.imgur.com/yDQLO8c.jpg" },
  { id: 6, name: "Helecho", price: 15, category: "Grandes", img: "https://i.imgur.com/bZTxo9H.jpg" }
];

export default function ProductList() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const inCart = (id) => items.some((p) => p.id === id);

  return (
    <div className="products">
      <h1>🌿 Nuestras Plantas</h1>
      <div className="grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>Categoria: {p.category}</p>
            <p>${p.price}</p>
            <button
              onClick={() => dispatch(addToCart(p))}
              disabled={inCart(p.id)}
            >
              {inCart(p.id) ? "Añadido" : "Añadir al carrito"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
