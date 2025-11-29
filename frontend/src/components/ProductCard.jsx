import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ p }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 8, borderRadius: 6, width: 220 }}>
      <img src={p.image} alt={p.name} style={{ width: "100%", height: 160, objectFit: "cover" }} />
      <h4>{p.name}</h4>
      <p>₹{p.price}</p>
      <Link to={`/product/${p._id}`}>View</Link>
    </div>
  );
}
