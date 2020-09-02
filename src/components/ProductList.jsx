import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductList = ({
  name,
  description,
  price,
  rating,
  stock,
  images,
  id,
}) => {
  const image = images[0].src.small;
  const cartProduct = { name, price, image, id };
  const [showHide, setShowHide] = useState(false);
  const { addProduct, cartItems, increase } = useContext(CartContext);

  const isInCart = (product) => {
    return cartItems.some((item) => item.id === product.id);
  };

  const display = () => {
    if (showHide) {
      return (
        <div>
          {description}
          {rating}
        </div>
      );
    } else {
      return "";
    }
  };

  const hide = () => {
    if (showHide == false) {
      return <button onClick={() => setShowHide(true)}>Read More</button>;
    } else {
      return <button onClick={() => setShowHide(false)}>Hide details</button>;
    }
  };

  return (
    <div className="items-wrapper">
      <div className="Image-Container">
        <img src={images[0].src.small} alt={images[0].alt} className="Image" />
      </div>

      <span>{name}</span>
      <span>{price}</span>
      <span>{stock}</span>
      {!isInCart(cartProduct) ? (
        <button onClick={() => addProduct(cartProduct)}>Add to Cart</button>
      ) : (
        <button onClick={() => increase(cartProduct)}>Add More</button>
      )}
      {display()}
      {hide()}
    </div>
  );
};

export default ProductList;
