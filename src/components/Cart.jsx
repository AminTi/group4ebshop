import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { BiPlusCircle, BiMinusCircle, BiTrash } from "react-icons/bi";

export default function Cart({ product }) {
  const { increase, decrease, removeProduct } = useContext(CartContext);
  return (
    <div className="cart">
      <div className="cart-image">
        <img
          alt={product.name}
          style={{ margin: "0 auto", maxHeight: "50px" }}
          src={product.image}
        />
      </div>
      <div className="cart-desc">
        <h5 className="cart-name">{product.name}</h5>
        <p className="cart-price">Price: {product.price} </p>
      </div>
      <div className="cart-qty">
        <p>Qty: {product.quantity}</p>
      </div>
      <div className="cart-qty-change">
        <button onClick={() => increase(product)} className="cart-qty-increase">
          <BiPlusCircle />
        </button>

        {product.quantity > 1 && (
          <button
            onClick={() => decrease(product)}
            className="cart-qty-decrease"
          >
            <BiMinusCircle />
          </button>
        )}

        {product.quantity === 1 && (
          <button
            onClick={() => removeProduct(product)}
            className="cart-qty-remove"
          >
            <BiTrash />
          </button>
        )}
      </div>
    </div>
  );
}
