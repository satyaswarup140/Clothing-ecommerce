import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import { CartContext } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const [p, setP] = useState(null);
  const [size, setSize] = useState("");
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    API.get(`/products/${id}`).then(res => {
      setP(res.data);
      setSize(res.data.sizes?.[0] || "");
    });
  }, [id]);

  if (!p) return <div>Loading...</div>;

  return (
    <div style={{ display: "flex", gap: 20 }}>
      <img src={p.image} alt={p.name} style={{ width: 320, height: 320, objectFit: "cover" }} />
      <div>
        <h2>{p.name}</h2>
        <p>₹{p.price}</p>
        <p>{p.description}</p>
        <div>
          <label>Size: </label>
          <select value={size} onChange={e => setSize(e.target.value)}>
            {p.sizes?.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <button onClick={() => addToCart({ product: p._id, name: p.name, size, qty: 1, price: p.price, image: p.image })} style={{ marginTop: 10 }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
