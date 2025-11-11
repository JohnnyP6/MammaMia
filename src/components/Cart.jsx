import React, { useState } from "react";
import { pizzaCart } from "../pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increase = (id) => {
    setCart(cart.map(p => 
      p.id === id ? { ...p, count: p.count + 1 } : p
    ));
  };

  const decrease = (id) => {
    setCart(cart
      .map(p => 
        p.id === id ? { ...p, count: p.count - 1 } : p
      )
      .filter(p => p.count > 0)
    );
  };

  const total = cart.reduce((acc, p) => acc + p.price * p.count, 0);

  return (
    <div className="cart">
      <h2>Tu carrito</h2>
      {cart.map(p => (
        <div key={p.id} className="cart-item">
          <img src={p.img} alt={p.name} className="cart-img" />
          <div>
            <h4>{p.name}</h4>
            <p>${p.price.toLocaleString()}</p>
          </div>
          <div>
            <button onClick={() => decrease(p.id)}>-</button>
            <span>{p.count}</span>
            <button onClick={() => increase(p.id)}>+</button>
          </div>
        </div>
      ))}
      <hr />
      <h3>Total: ${total.toLocaleString()}</h3>
      <button>Pagar</button>
    </div>
  );
};

export default Cart;
