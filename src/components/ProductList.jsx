import React, { useState, useContext, useRef } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

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
  const paragraf = useRef(true);
  const [styles, setStyles] = useState();

  const isInCart = (product) => {
    return cartItems.some((item) => item.id === product.id);
  };

  function display(e) {
    if (showHide) {
      paragraf.current.innerText = `${description}`;

      setShowHide(false);
    } else {
      setStyles("none");
      paragraf.current.innerText = "";
      setShowHide(true);
    }
  }

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
      <span>{price} -:</span>
      <span> Stock {stock}</span>
      <div className="btn-container">
        <p ref={paragraf} style={{ border: styles }} className="text">
          {" "}
        </p>
        {/* <button onClick={display} className="ShowhideBtn">
          Read More
        </button> */}
        <button><Link to={`/product/${id}`}>Described Product</Link></button>
        
        {!isInCart(cartProduct) ? (
          <button onClick={() => addProduct(cartProduct)}>Add to Cart</button>
        ) : (
          <button onClick={() => increase(cartProduct)}>Add More</button>
        )}
        
      </div>
    </div>
  );
};
//   return (
//     <div className="items-wrapper">
//       <div className="Image-Container">
//         <img src={images[0].src.small} alt={images[0].alt} className="Image" />
//       </div>

//       <span>{name}</span>
//       <span>{price}</span>
//       <span>{stock}</span>
//       {display()}
//       {hide()}
//       <Link to={`/product/${id}`} id={id}>Detailed Page</Link>
//     </div>
//   );

export default ProductList;
