import React from "react";

export default function CartItem({ item, onChangeQty, onRemove }) {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "center", padding: 8, borderBottom: "1px solid #eee" }}>
      <img src={item.productImage || item.image} alt={item.name} style={{ width: 80, height: 80, objectFit: "cover" }} />
      <div style={{ flex: 1 }}>
        <div>{item.name}</div>
        <div>Size: {item.size}</div>
        <div>₹{item.price}</div>
      </div>
      <div>
        <input type="number" value={item.qty} min={1} onChange={(e) => onChangeQty(Number(e.target.value))} style={{ width: 60 }} />
        <div>
          <button onClick={onRemove} style={{ marginTop: 8 }}>Remove</button>
        </div>
      </div>
    </div>
  );
}
