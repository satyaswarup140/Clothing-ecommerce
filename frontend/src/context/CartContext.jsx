import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const raw = localStorage.getItem("cart");
    return raw ? JSON.parse(raw) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const idx = cart.findIndex(i => i.product === item.product && i.size === item.size);
    if (idx >= 0) {
      const copy = [...cart];
      copy[idx].qty += item.qty;
      setCart(copy);
    } else {
      setCart([...cart, item]);
    }
  };

  const updateCart = (items) => setCart(items);
  const clearCart = () => setCart([]);

  return <CartContext.Provider value={{ cart, setCart, addToCart, updateCart, clearCart }}>{children}</CartContext.Provider>;
};
