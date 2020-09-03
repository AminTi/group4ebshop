import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from "../context/CartContext";
import { useState, useContext } from "react";
import CartPage from "../pages/CartPage";

export default function Layout({ children }) {
  const { itemCount } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  function renderCart() {
    if (showCart) {
      return (
        <>
          <span onClick={() => setShowCart(false)}>
            <FiShoppingCart />
            {`(${itemCount})`}
          </span>
          <CartPage />
        </>
      );
    }
  }

  function renderShowCart() {
    if (!showCart) {
      return (
        <span onClick={() => setShowCart(true)}>
          <FiShoppingCart />
          {`(${itemCount})`}
        </span>
      );
    }
  }

  return (
    <div>
      <header className="header navbar fixed-top navbar-light bg-light mb-4">
        <Link className="header-home link navbar-brand" to="/">
          Home
        </Link>
        {renderShowCart()}
        {renderCart()}
      </header>
      {children}
      <div class="card text-center mt-4">
        <div class="card-header">This is a footer</div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
