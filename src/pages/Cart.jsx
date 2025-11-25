import React, { useState } from "react";
import { pizzaCart } from "../pizzas";
import { formatPrice } from "../utils/format";

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
    <div className="container my-4">
      <h2 className="mb-4 text-center">🛒 Tu carrito</h2>

      {cart.map(p => (
        <div 
          key={p.id} 
          className="d-flex align-items-center justify-content-between border rounded p-3 mb-3 shadow-sm bg-light"
        >
          <div className="d-flex align-items-center">
            <img 
              src={p.img} 
              alt={p.name} 
              style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px", marginRight: "15px" }} 
            />
            <div>
              <h5 className="mb-1">{p.name}</h5>
              <p className="mb-0 text-muted">${formatPrice(p.price)}</p>
            </div>
          </div>

          <div className="d-flex align-items-center">
            <button 
              className="btn btn-outline-danger btn-sm me-2"
              onClick={() => decrease(p.id)}
            >−</button>
            <span className="fw-bold">{p.count}</span>
            <button 
              className="btn btn-outline-success btn-sm ms-2"
              onClick={() => increase(p.id)}
            >+</button>
          </div>
        </div>
      ))}

      <div className="text-end mt-4 border-top pt-3">
        <h4 className="fw-bold">Total: ${formatPrice(total)}</h4>
        <button className="btn btn-success mt-2">Pagar 💳</button>
      </div>
    </div>
  );
};

export default Cart;
