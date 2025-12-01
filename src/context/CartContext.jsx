import { createContext, useState, useMemo } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart((prev) => {
      const exists = prev.find(p => p.id === pizza.id);
      if (exists) {
        return prev.map(p =>
          p.id === pizza.id ? { ...p, count: p.count + 1 } : p
        );
      }
      return [...prev, { ...pizza, count: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map(p => p.id === id ? { ...p, count: p.count - 1 } : p)
        .filter(p => p.count > 0)
    );
  };

  const total = useMemo(
    () => cart.reduce((sum, p) => sum + p.price * p.count, 0),
    [cart]
  );

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
};
