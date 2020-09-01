import React from "react"

const ProductList = ({ name, description, price, rating, stock, images }) => {
    console.log(images)
    return (
        <div>
            <div>
                <div>
                    <img src={images[0].src.small} alt={images[0].alt} />
                </div>
            </div>
            <span>{name}</span>
            <span>{price}</span>
        </div>
    )
}

export default ProductList
