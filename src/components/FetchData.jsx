import React, { useState, useEffect } from "react"
import axios from "axios"
import ProductList from "./ProductList"
import ProductDetailed from "./ProductDetailed"

const FetchData = () => {
    const [data, setData] = useState({})

    const DataHandler = () => {
        axios
            .get(
                "https://mock-data-api.firebaseio.com/e-commerce/products.json"
            )
            .then((res) => {
                console.log(res.data)
                console.log(Object.entries(res.data))
                setData(res.data)
            })
    }

    useEffect(() => {
        DataHandler()
    }, [])

    return (
        <div className="main-container">
            {Object.entries(data).map((item) => {
                return (
                    <ProductList
                        key={item[0]}
                        description={item[1].description}
                        name={item[1].name}
                        price={item[1].price}
                        rating={item[1].rating}
                        stock={item[1].stock}
                        images={item[1].images}
                    />
                )
            })}
        </div>
    )
}

export default FetchData
