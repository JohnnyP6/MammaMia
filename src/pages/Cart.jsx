


import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { formatPrice } from "../utils/format"; 
const Cart = () => {
  const { cart, addToCart, removeFromCart, total } = useContext(CartContext);
  const { token } = useContext(UserContext);
  const [successMessage, setSuccessMessage] = useState("");

  const handleCheckout = async () => {
    if (!token) return;

    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          cart: cart,
        }),
      });

      if (response.ok) {
        setSuccessMessage("¡Compra realizada con éxito!");
      } else {
        alert("Error al realizar la compra");
      }
    } catch (error) {
      console.error("Error en checkout:", error);
    }
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-center">🛒 Tu carrito</h2>

      {cart.length === 0 && <h4 className="text-center text-muted">Carrito vacío</h4>}

      {cart.map((p) => (
        <div
          key={p.id}
          className="d-flex align-items-center justify-content-between border rounded p-3 mb-3 shadow-sm bg-light"
        >
          <div className="d-flex align-items-center">
            <img
              src={p.img}
              alt={p.name}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                borderRadius: "8px",
                marginRight: "15px",
              }}
            />
            <div>
              <h5 className="mb-1">{p.name}</h5>
              <p className="mb-0 text-muted">${formatPrice ? formatPrice(p.price) : p.price}</p>
            </div>
          </div>

          <div className="d-flex align-items-center">
            <button
              className="btn btn-outline-danger btn-sm me-2"
              onClick={() => removeFromCart(p.id)}
            >
              −
            </button>
            <span className="fw-bold">{p.count}</span>
            <button
              className="btn btn-outline-success btn-sm ms-2"
              onClick={() => addToCart(p)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <div className="text-end mt-4 border-top pt-3">
        <h4 className="fw-bold">
          Total: ${formatPrice ? formatPrice(total) : total}
        </h4>

   
        <button
          className="btn btn-success mt-2"
          onClick={handleCheckout}
          disabled={!token}
        >
          Pagar 💳
        </button>
        
     
        {successMessage && (
          <div className="alert alert-success mt-3" role="alert">
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;