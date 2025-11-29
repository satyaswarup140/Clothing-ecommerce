import { useState, useEffect } from "react";
import "./Filters.css";

export default function Filters({ onFilterChange }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState([]);

  // Fetch categories from backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products/categories");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Error loading categories", error);
      }
    };
    fetchCategories();
  }, []);

  // Notify parent of filter changes
  useEffect(() => {
    onFilterChange({ search, category, price });
  }, [search, category, price]);

  return (
    <div className="filters">
      <h3>Filters</h3>

      {/* Search */}
      <label>Search</label>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Category */}
      <label>Category</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((cat, i) => (
          <option key={i} value={cat}>{cat}</option>
        ))}
      </select>

      {/* Price Filter */}
      <label>Price</label>
      <select value={price} onChange={(e) => setPrice(e.target.value)}>
        <option value="">Any</option>
        <option value="0-500">₹0 - ₹500</option>
        <option value="500-1000">₹500 - ₹1000</option>
        <option value="1000-2000">₹1000 - ₹2000</option>
        <option value="2000-5000">₹2000 - ₹5000</option>
      </select>
    </div>
  );
}
