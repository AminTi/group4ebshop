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
  const { addProduct, cartItems, increase, isInCart } = useContext(CartContext);
  const paragraf = useRef(true);
  const [styles, setStyles] = useState();

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
    <div className="col-md-3">
      <div className="items-wrapper card mb-4">
        {/* <div className="Image-Container"> */}
        <img
          src={images[0].src.small}
          alt={images[0].alt}
          className="Image card-img-top"
          style={{maxHeight:170, minHeight:170, objectFit:"cover"}}
        />
        {/* </div> */}
        {/* <span>{name}</span>
            <span>{price} -:</span>
            <span> Stock {stock}</span> */}
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-title">{price} -:</p>
          <p className="card-title"> Stock {stock}</p>
          {/* <p ref={paragraf} style={{ border: styles }} className="text">
                    {" "}
                </p> */}
          {/* <button onClick={display} className="ShowhideBtn">
            Read More
          </button> */}
          <button className="btn btn-outline-primary btn-sm mr-2">
            <Link to={`/product/${id}`}>Info</Link>
          </button>

          {!isInCart(cartProduct, cartItems) ? (
            <button
              className="btn btn-success btn-sm"
              onClick={() => addProduct(cartProduct)}
            >
              Add to Cart
            </button>
          ) : (
            <button
              className="btn btn-outline-success btn-sm"
              onClick={() => increase(cartProduct)}
            >
              Add More
            </button>
          )}
        </div>

        <div className="btn-container"></div>
      </div>
    </div>
  );
};

//   return (
//     <div className="items-wrapper">
//       <div className="Image-Container">
//         <img src={images[0].src.small} alt={images[0].alt} className="Image" />
//       </div>

//                 {!isInCart(cartProduct) ? (
//                     <button onClick={() => addProduct(cartProduct)}>
//                         Add to Cart
//                     </button>
//                 ) : (
//                     <button onClick={() => increase(cartProduct)}>
//                         Add More
//                     </button>
//                 )}
//             </div>
//         </div>
//     )
// }

export default ProductList;
