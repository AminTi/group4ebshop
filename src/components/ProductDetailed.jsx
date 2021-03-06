import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import FetchReviews from "./FetchReviews";

function ProductDetailed({ data }) {
  const { name, price, id } = data;
  const src = data.images ? data.images[0].src.small : "";
  const cartProduct = { name, price, id, src };
  const { addProduct, increase, isInCart, cartItems } = useContext(CartContext);
  return (
    <div className="detail-card card mx-5 ">
      <img
        src={data.images[0].src.small}
        className="card-img-top"
        style={{ maxHeight: 500, objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <h6>Price:- {data.price} kr</h6>
        <p>{data.stock} in stock</p>
        <h6 className="card-text">{data.description}</h6>
        {!isInCart(cartProduct, cartItems) ? (
          <button
            className="btn btn-success mt-4"
            onClick={() => addProduct(cartProduct)}
          >
            Add to Cart
          </button>
        ) : (
          <button
            className="btn btn-outline-success"
            onClick={() => increase(cartProduct)}
          >
            Add More
          </button>
        )}
        <div className="card mt-4">
          <FetchReviews productId={data.id} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailed;
