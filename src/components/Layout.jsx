import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from "../context/CartContext";
import { useState, useContext } from "react";
import CartPage from "../pages/CartPage";

export default function Layout({ children }) {
<<<<<<< HEAD
  const { itemCount, toggleCart, showCart } = useContext(CartContext);
  //   const [showCart, setShowCart] = useState(false);
=======
  const { itemCount } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
>>>>>>> ce3e597485585541597bd80cc61f76c726da1cc1

  function renderCart() {
    if (showCart) {
      return (
        <>
<<<<<<< HEAD
          <span onClick={() => toggleCart(true)}>
=======
          <span onClick={() => setShowCart(false)}>
>>>>>>> ce3e597485585541597bd80cc61f76c726da1cc1
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
<<<<<<< HEAD
        <span onClick={() => toggleCart(false)}>
=======
        <span onClick={() => setShowCart(true)}>
>>>>>>> ce3e597485585541597bd80cc61f76c726da1cc1
          <FiShoppingCart />
          {`(${itemCount})`}
        </span>
      );
    }
  }

  return (
    <div>
      <header className="header navbar fixed-top navbar-light bg-light mb-4">
<<<<<<< HEAD
        <Link
          onClick={() => toggleCart(showCart)}
          className="header-home link navbar-brand"
          to="/"
        >
=======
        <Link className="header-home link navbar-brand" to="/">
>>>>>>> ce3e597485585541597bd80cc61f76c726da1cc1
          Home
        </Link>
        {renderShowCart()}
        {renderCart()}
      </header>
      {children}
      <div className="card text-center mt-4">
        <div className="card-header">This is a footer</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
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
