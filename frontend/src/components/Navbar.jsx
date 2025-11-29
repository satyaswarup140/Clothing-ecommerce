import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import "./Navbar.css";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="nav">
      <div className="container nav-content">
        
        {/* Logo */}
        <Link to="/" className="logo">ClothCo</Link>

        {/* Center Links */}
        <div className="nav-links">
          <Link to="/products">Products</Link>
        </div>

        {/* Right Section */}
        <div className="nav-actions">
          <Link to="/cart" className="cart-btn">
            🛒 Cart ({totalItems})
          </Link>

          {user ? (
            <div className="user-area">
              <span className="username">Hi, {user.name}</span>
              <button className="logout-btn" onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="login-btn">Login</Link>
          )}
        </div>

      </div>
    </nav>
  );
}
