import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
export default function Layout({ children }) {
  return (
    <div>
      <header className="header">
        <Link className="header-home link" to="/">
          Home
        </Link>
        <Link className="header-cart link" to="/cart">
          <FiShoppingCart />
        </Link>
      </header>
      {children}
      <footer className="footer">
        <p>This is a footer</p>
      </footer>
    </div>
  );
}
