import React, { useState, useRef } from "react"
import BuyButton from "./BuyButton"

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
    }

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
                <p ref={paragraf} style={{ border: styles }} className="text">
                    {" "}
                </p>
                <button onClick={display} className="ShowhideBtn">
                    Read More
                </button>
                <BuyButton />
            </div>
        </div>
    )
}
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

export default ProductList
