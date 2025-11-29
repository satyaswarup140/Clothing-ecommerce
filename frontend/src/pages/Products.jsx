import React, { useEffect, useState, useContext } from "react";
import API from "../services/api";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";

export default function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    API.get("/products").then(res => {
      setProducts(res.data.products || res.data);
    }).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {products.map(p => (
          <div key={p._id}>
            <ProductCard p={p} />
            <div style={{ marginTop: 6 }}>
              <button onClick={() => addToCart({ product: p._id, name: p.name, size: (p.sizes?.[0] || "M"), qty: 1, price: p.price, image: p.image })}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

