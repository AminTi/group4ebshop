import React, { useContext } from "react";
import Cart from "../components/Cart";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartPage({ toggle }) {
  const {
    cartItems,
    totalSum,
    itemCount,
    clearCart,
    toggleCart,
    showCart,
  } = useContext(CartContext);
  return (
    <div className="cartpage">
      <h2 className="cartpage-title">Shopping Cart</h2>
      {cartItems.length ? (
        <>
          {cartItems.map((item) => (
            <Cart key={item.id} product={item} />
          ))}
          <div>Total: {totalSum}:-</div>
          <div>Items: {itemCount} pcs</div>
          <button onClick={() => clearCart()} className="button-clear">
            <Link
              onClick={() => toggleCart(showCart)}
              to="/"
              className="link-clear"
            >
              {" "}
              Clear Cart
            </Link>
          </button>
          <button className="button-checkout">
            <Link
              onClick={() => toggleCart(showCart)}
              to="/checkout"
              className="link-checkout"
            >
              Go to checkout
            </Link>
          </button>
        </>
      ) : (
        <h5 className="cart-empty">Your Cart is Empty</h5>
      )}
    </div>
  );
}
