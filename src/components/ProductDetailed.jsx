import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import FetchReviews from "./FetchReviews";

function ProductDetailed({ data }) {
  const { name, price, id } = data;
  const src = data.images ? data.images[0].src.small : "";
  const cartProduct = { name, price, id, src };
  const { addProduct, increase, isInCart, cartItems } = useContext(CartContext);
  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.images[0].src.small} />
      <h2>{data.price} kr</h2>
      <p>{data.stock} in stock</p>
      <h3>{data.description}</h3>
      {!isInCart(cartProduct, cartItems) ? (
        <button onClick={() => addProduct(cartProduct)}>Add to Cart</button>
      ) : (
        <button onClick={() => increase(cartProduct)}>Add More</button>
      )}
      <FetchReviews productId={data.id} />
    </div>
  );
}

export default ProductDetailed;
