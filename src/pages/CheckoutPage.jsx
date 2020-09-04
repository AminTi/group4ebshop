import React, { useContext, useRef, useState, useEffect } from "react"
import axios from "axios"

import { CartContext } from "../context/CartContext"

import TableStartPage from "../components/TableStartPage"
import Order from "../components/Order"

function CheckoutPage() {
    const context = useContext(CartContext)
    const [discountCupon, setDescount] = useState({})
    const [inputValue, setinputValue] = useState()
    const [discountPrice, setDiscountPrice] = useState([])
    const apiKey = useRef()
    let productTotalPrice = parseInt(context.totalSum)

    const discountValues = (e) => {
        setinputValue(apiKey.current.value.toUpperCase())
        const descountApi = `https://mock-data-api.firebaseio.com/e-commerce/couponCodes/${inputValue}.json`
        axios.get(descountApi).then((res) => {
            setDescount(res.data)
        })
    }

    useEffect(() => {
        discountValues()
    }, [inputValue])

    useEffect(() => {
        setDiscountPrice(discountCounter())
    }, [discountCupon])

    const discountCounter = () => {
        const discountprice = discountCupon && discountCupon.discount
        if (
            inputValue === "BLACKFRIDAY" ||
            inputValue === "SUMMER19" ||
            inputValue === "BLACKFRIDAY2019"
        ) {
            const disTotal = productTotalPrice * discountprice
            return disTotal
        } else {
            const finalPrice = productTotalPrice
            return finalPrice
        }
    }

    const ErrorCheck = () => {
        if (
            inputValue === "BLACKFRIDAY" ||
            inputValue === "SUMMER19" ||
            inputValue === "BLACKFRIDAY2019"
        ) {
            return (apiKey.current.disabled = true)
        }
    }

    return (
        <div className="checkout-container">
            <h3 className="checkout-header">Welcome to Checkout</h3>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col"> Product</th>
                        <th scope="col"> Quantity </th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
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
                </tbody>
                <tfoot></tfoot>
            </table>

            <input type="text" ref={apiKey} />
            {ErrorCheck() && <span> Discount applied </span>}

            {discountCupon == null && <span> Invalid Coupon code</span>}
            <button
                className="button-discount btn btn-primary btn-sm"
                onClick={discountValues}>
                Apply discount
            </button>
            <button
                className="button-discount btn btn-success btn-sm"
                onClick={discountValues}>
                Order
            </button>
            <h5 className="checkout-price">
                Total Price: {Math.ceil(discountPrice)}:-
            </h5>
        </div>
    )
}

export default CheckoutPage
