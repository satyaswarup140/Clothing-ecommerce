import React, { useEffect, useState } from "react";
import API from "../services/api";
import { useParams } from "react-router-dom";

export default function OrderSuccess() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await API.get(`/orders/my-orders`); // we fetch user's orders and find id
        const found = res.data.find(o => o._id === id);
        setOrder(found);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [id]);

  if (!order) return <div>Loading order...</div>;

  return (
    <div>
      <h2>Order Confirmed</h2>
      <p>Order ID: {order._id}</p>
      <p>Total: ₹{order.totalPrice}</p>
      <ul>
        {order.items.map((it, i) => <li key={i}>{it.name} ({it.size}) x{it.qty} — ₹{it.price}</li>)}
      </ul>
    </div>
  );
}
