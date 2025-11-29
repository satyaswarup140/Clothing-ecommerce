import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, updateCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const changeQty = (index, qty) => {
    const copy = [...cart];
    copy[index].qty = qty;
    updateCart(copy);
  };

  const remove = (index) => {
    const copy = [...cart];
    copy.splice(index, 1);
    updateCart(copy);
  };

  const total = cart.reduce((s,i) => s + i.qty * i.price, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>Cart is empty</p>}
      {cart.map((item, idx) => (
        <CartItem key={idx} item={item} onChangeQty={(q) => changeQty(idx, q)} onRemove={() => remove(idx)} />
      ))}
      <h3>Total: ₹{total}</h3>
      <button onClick={() => navigate("/checkout")}>Checkout</button>
      <button onClick={() => { clearCart(); }} style={{ marginLeft: 8 }}>Clear</button>
    </div>
  );
}
