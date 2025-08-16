import React, { useState } from "react";
import Landing from "./components/Landing";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Header from "./components/Header";

export default function App() {
  const [page, setPage] = useState("landing");

  const goToProducts = () => setPage("products");
  const goToCart = () => setPage("cart");
  const goToLanding = () => setPage("landing");

  return (
    <div>
      {page !== "landing" && (
        <Header goToProducts={goToProducts} goToCart={goToCart} />
      )}

      {page === "landing" && <Landing goToProducts={goToProducts} />}
      {page === "products" && <ProductList />}
      {page === "cart" && <Cart goToProducts={goToProducts} />}
    </div>
  );
}
