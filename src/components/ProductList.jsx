import React, { useState } from "react"

const ProductList = ({ name, description, price, rating, stock, images }) => {
    const [showHide, setShowHide] = useState(false)

    const display = () => {
        if (showHide) {
            return (
                <div>
                    {description}
                    {rating}
                </div>
            )
        } else {
            return ""
        }
    }

    const hide = () => {
        if (showHide == false) {
            return <button onClick={() => setShowHide(true)}>Read More</button>
        } else {
            return (
                <button onClick={() => setShowHide(false)}>Hide details</button>
            )
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
            <span>{price}</span>
            <span>{stock}</span>
            {display()}
            {hide()}
        </div>
    )
}

export default ProductList
