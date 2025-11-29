import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const placeOrder = async () => {
    const items = cart.map(i => ({
      product: i.product,
      name: i.name,
      size: i.size,
      qty: i.qty,
      price: i.price
    }));
    const totalPrice = items.reduce((s,i) => s + i.qty * i.price, 0);

    try {
      const res = await API.post("/orders", { items, totalPrice });
      clearCart();
      navigate(`/order/${res.data._id}`);
    } catch (err) {
      alert(err?.response?.data?.message || "Order failed");
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <p>Items: {cart.length}</p>
      <button onClick={placeOrder}>Place Order (Mock)</button>
    </div>
  );
}
