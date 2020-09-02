import React, { useContext } from "react";
import Cart from "../components/Cart";
import { CartContext } from "../context/CartContext";

export default function CartPage() {
  const { cartItems, totalSum, itemCount, clearCart } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <Cart key={item.id} product={item} />
      ))}
      <div>total:{totalSum}</div>
      <div>itemCount:{itemCount}</div>
      <button onClick={() => clearCart()}>Clear Cart</button>
      <button>Go to checkout</button>
    </div>
  );
}
