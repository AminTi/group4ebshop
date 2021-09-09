import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import CartPage from "../pages/CartPage";

export default function Layout({ children }) {
  const { itemCount, toggleCart, showCart } = useContext(CartContext);

  function renderCart() {
    if (showCart) {
      return (
        <>
          <span onClick={() => toggleCart(true)}>
            <FiShoppingCart className="cart-ui" />
            {`(${itemCount})`}
          </span>
          <CartPage toggle={showCart} />
        </>
      );
    }
  }

  function renderShowCart() {
    if (!showCart) {
      return (
        <span onClick={() => toggleCart(false)}>
          <FiShoppingCart className="cart-ui" />
          {`(${itemCount})`}
        </span>
      );
    }
  }

  return (
    <div>
      <header className="header navbar fixed-top navbar-light  mb-4 header-color">
        <Link
          onClick={(showCart) => toggleCart(showCart)}
          //onClick={showCart && toggleCart(showCart)}
          className="header-home link navbar-brand"
          to="/"
        >
          <h4>Home</h4>
        </Link>
        {renderShowCart()}
        {renderCart()}
      </header>
      {children}
      <footer className="footer">
        <div>Simple WebShop</div>
        <div>Basic Webshop</div>
      </footer>
    </div>
  );
}
