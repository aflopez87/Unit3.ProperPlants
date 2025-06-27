import React, { useState } from "react";
import PLANTS from "./data.js";
import PlantList from "./plants/PlantList";
import CartList from "./cart/CartList";

export default function App() {
  const [cart, setCart] = useState({});
  const addToCart = (plant)=>{
    setCart(previous => ({
      ...previous,
      [plant.id]: {
        ...plant,
        quantity: (previous[plant.id]?.quantity || 0) + 1
      }
    }));
  };

  const removeFromCart = (plant)=> {
    setCart(previous => {
      const newCart = {...previous};
      if (newCart[plant.id]) {
      newCart[plant.id].quantity -= 1;
      if (newCart[plant.id].quantity <= 0){
        delete newCart[plant.id];
      }
      }
      return newCart;
    });
  };
  return (
    <>
      <header>
        <h1>Proper Plants</h1>
      </header>
      <main>
        <section className="plants">
          <h2>Plants</h2>
          <PlantList plants={PLANTS} addToCart={addToCart} />
        </section>
        <section className="cart">
          <h2>Cart</h2>
          <CartList cartItem={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
        </section>
      </main>
    </>
  );
};


