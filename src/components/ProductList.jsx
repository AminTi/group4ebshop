<<<<<<< HEAD
import React, { useState, useRef } from "react"
import { BuyButton } from "./BuyButton"

const ProductList = ({ name, description, price, rating, stock, images }) => {
    const [showHide, setShowHide] = useState(false)
    const paragraf = useRef(true)
    const [styles, setStyles] = useState()

    function display(e) {
        if (showHide) {
            paragraf.current.innerText = `${description}`

            setShowHide(false)
        } else {
            setStyles("none")
            paragraf.current.innerText = ""
            setShowHide(true)
        }
=======
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductList = ({
  key,
  id,
  name,
  description,
  price,
  rating,
  stock,
  images,
}) => {
  const [showHide, setShowHide] = useState(false);

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
    if (showHide === false) {
      return <button onClick={() => setShowHide(true)}>Read More</button>;
    } else {
      return <button onClick={() => setShowHide(false)}>Hide details</button>;
>>>>>>> d233559ed13ec62bb32b9be5bc6486d2d387bb77
    }
  };

<<<<<<< HEAD
    return (
        <div className="items-wrapper">
            <div className="Image-Container">
                <img
                    src={images[0].src.small}
                    alt={images[0].alt}
                    className="Image"
                />
            </div>
            <span>{name}</span>
            <span>{price} -:</span>
            <span> Stock {stock}</span>
            <div className="btn-container">
                <p
                    ref={paragraf}
                    style={{ border: styles }}
                    className="text"></p>
                <button onClick={display}> Read More </button>
                <button> Buy</button>
            </div>
        </div>
    )
}
=======
  return (
    <div className="items-wrapper">
      <div className="Image-Container">
        <img src={images[0].src.small} alt={images[0].alt} className="Image" />
      </div>

      <span>{name}</span>
      <span>{price}</span>
      <span>{stock}</span>
      {display()}
      {hide()}
      <Link to={`/product/${id}`} id={id}>Detailed Page</Link>
    </div>
  );
};
>>>>>>> d233559ed13ec62bb32b9be5bc6486d2d387bb77

export default ProductList;
