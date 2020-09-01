import React from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div>
      <header className="header">
        <Link className="header-home link" to="/">
          Home
        </Link>
        <Link className="header-cart link" to="/cart">
          Cart
        </Link>
      </header>
      {children}
      <footer className="footer">
        <p>This is a footer</p>
      </footer>
    </div>
  );
}
