import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { BiPlusCircle, BiMinusCircle, BiTrash } from "react-icons/bi";

export default function Cart({ product }) {
  const { increase, decrease, removeProduct } = useContext(CartContext);
  return (
    <div className="cart-item">
      <div className="cart-header">
        <div className="cart-image-wrapper">
          <img className="cart-image" alt={product.name} src={product.image} />
        </div>
        <h6 className="cart-name">{product.name}</h6>
      </div>
      <div className="cart-info">
        <p className="cart-qty">Qty: {product.quantity}</p>
        <p className="cart-price">Price: {product.price}:-</p>
      </div>
      <div className="cart-qty-change">
        <button
          onClick={() => increase(product)}
          className="cart-qty-increase button-qty"
        >
          <BiPlusCircle />
        </button>

        {product.quantity > 1 && (
          <button
            onClick={() => decrease(product)}
            className="cart-qty-decrease button-qty"
          >
            <BiMinusCircle />
          </button>
        )}

        {product.quantity === 1 && (
          <button
            onClick={() => removeProduct(product)}
            className="cart-qty-remove button-qty"
          >
            <BiTrash />
          </button>
        )}
      </div>
    </div>
  );
}
