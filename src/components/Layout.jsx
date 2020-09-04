import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from "../context/CartContext";
import { useState, useContext } from "react";
import CartPage from "../pages/CartPage";

export default function Layout({ children }) {
  const { itemCount, toggleCart, showCart } = useContext(CartContext);

  function renderCart() {
    if (showCart) {
      return (
        <>
          <span onClick={() => toggleCart(true)}>
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
        <span onClick={() => toggleCart(false)}>
          <FiShoppingCart />
          {`(${itemCount})`}
        </span>
      );
    }
  }

  return (
    <div>
      <header className="header navbar fixed-top navbar-light bg-light mb-4">
        <Link
          className="header-home link navbar-brand"
          className="header-home link navbar-brand"
          to="/"
        >
          Home
        </Link>
        {renderShowCart()}
        {renderCart()}
      </header>
      {children}
      <div className="card text-center mt-4">
        <div className="card-header">
          <h5>Room4Shop</h5>
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>Project Assignment for Javascript 3, React</p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
