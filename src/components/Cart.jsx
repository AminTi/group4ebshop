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
      <div className="cart-quntity">
        <p>Qty: {product.quantity}</p>
      </div>
      <div className="cart-quntity-increase">
        <button onClick={() => increase(product)}>
          <BiPlusCircle />
        </button>

        {product.quantity > 1 && (
          <button
            onClick={() => decrease(product)}
            className="cart-quntity-decrease"
          >
            <BiMinusCircle />
          </button>
        )}

        {product.quantity === 1 && (
          <button
            onClick={() => removeProduct(product)}
            className="cart-quntity-remove"
          >
            <BiTrash />
          </button>
        )}
      </div>
    </div>
  );
}
