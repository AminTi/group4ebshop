import React, { useContext, useRef, useState, useEffect } from "react"
import axios from "axios"

import { CartContext } from "../context/CartContext"

import TableStartPage from "../components/TableStartPage"

function CheckoutPage() {
    const context = useContext(CartContext)
    const [discountCupon, setDescount] = useState({})
    const [inputValue, setinputValue] = useState()
    const apiKey = useRef()
    const [styles, setStyles] = useState()

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
        if (
            inputValue === "BLACKFRIDAY" ||
            inputValue === "SUMMER19" ||
            inputValue === "BLACKFRIDAY2019"
        ) {
            return productTotalPrice * discountprice
        } else {
            return productTotalPrice
        }
    }

    const ErrorCheck = () => {
        if (
            inputValue === "BLACKFRIDAY2019" ||
            inputValue === "SUMMER19" ||
            inputValue === "BLACKFRIDAY2019"
        ) {
            return (apiKey.current.disabled = true)
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
            <input type="text" ref={apiKey} style={{ border: styles }} />
            {ErrorCheck() && <span> Discout applied </span>}
            <button onClick={discountValues} style={{ border: styles }}>
                {" "}
                Check
            </button>
        </>
    )
}

export default CheckoutPage
