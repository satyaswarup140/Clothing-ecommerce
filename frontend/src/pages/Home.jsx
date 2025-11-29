import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="hero fade-in">
      <div className="hero-content container">
        <h1>Style That Fits Your Life</h1>
        <p>Discover premium clothing made for comfort, confidence, and everyday fashion.</p>
        <Link to="/products" className="shop-btn">Browse Products</Link>
      </div>
    </div>
  );
}
