import React from "react";

export default function Landing({ goToProducts }) {
  return (
    <div className="landing">
      <h1>🌱 GreenLife</h1>
      <p>Tu tienda online de plantas de interior para un hogar más verde.</p>
      <button onClick={goToProducts}>Comenzar</button>
    </div>
  );
}
