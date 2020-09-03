import React, { useContext, useRef, useState, useEffect } from "react"
import axios from "axios"

import { CartContext } from "../context/CartContext"

import TableStartPage from "../components/TableStartPage"

function CheckoutPage() {
    const context = useContext(CartContext)
    const [discountCupon, setDescount] = useState({})

    const [inputValue, setinputValue] = useState()
    const apiKey = useRef()

    const descountApi = `https://mock-data-api.firebaseio.com/e-commerce/couponCodes/${inputValue}.json`

    const discountValues = (e) => {
        setinputValue(apiKey.current.value.toUpperCase())
        axios.get(descountApi).then((res) => {
            setDescount(res.data)
        })
    }

    useEffect(() => {
        discountValues()
    }, [inputValue])

    const discountprice = discountCupon && discountCupon.discount
    let productTotalPrice = parseInt(context.totalSum)

    const discountCounter = () => {
        if (inputValue) {
            return productTotalPrice * discountprice
        } else {
            return productTotalPrice
        }
    }

    return (
        <>
            <h3>CheckoutPage</h3>
            {context.cartItems.map((item, index) => {
                return (
                    <TableStartPage
                        key={index}
                        img={item.image}
                        name={item.name}
                        quantity={item.quantity}
                        price={item.price}
                    />
                )
            })}

            <span>{discountCounter()}</span>
            <input type="text" ref={apiKey} />
            <button onClick={discountValues}>Check</button>
        </>
    )
}

export default CheckoutPage
