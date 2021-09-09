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

  const descriptionShort = description.toString().substring(0, 20);

  return (
    <div
      className="col-md-3 d-flex align-items-stretch "
      style={{ marginTop: 70 }}
    >
      <div className="items-wrapper card flex-grow" style={{ width: 1000 }}>
        <img
          src={images[0].src.small}
          alt={images[0].alt}
          className="Image card-img-top"
          style={{
            maxHeight: 170,
            minHeight: 170,
            objectFit: "cover",
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Price :- {price}kr</p>
          <p className="card-text">{descriptionShort}...</p>
        </div>
        <div className="card-footer">
          {/* <Link to={`/product/${id}`}>
            <button className="btn btn-outline-primary btn-sm mr-2">
              Info
            </button>
          </Link> */}

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
      </div>
    </div>
  );
};

//                     {!isInCart(cartProduct, cartItems) ? (
//                         <button
//                             className="btn btn-success btn-sm"
//                             onClick={() => addProduct(cartProduct)}>
//                             Add to Cart
//                         </button>
//                     ) : (
//                         <button
//                             className="btn btn-outline-success btn-sm"
//                             onClick={() => increase(cartProduct)}>
//                             Add More
//                         </button>
//                     )}
//                 </div>

//                 <div className="btn-container"></div>
//             </div>
//         </div>
//     )
// }

export default ProductList;
