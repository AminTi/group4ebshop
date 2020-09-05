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
    const [order, setOrder] = useState(false)
    const apiKey = useRef()
    const userInput = useRef()
    const [NotANumber, setNaN] = useState(0)

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
        setNaN(productTotalPrice)
        console.log(NotANumber)
        const discountprice = discountCupon && discountCupon.discount
        console.log(discountprice)
        if (
            inputValue === "BLACKFRIDAY" ||
            inputValue === "SUMMER19" ||
            inputValue === "BLACKFRIDAY2019"
        ) {
            const disTotal = NotANumber * discountprice
            return disTotal
        } else {
            const finalPrice = NotANumber
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
            {ErrorCheck() && (
                <span className="validCupon"> Discount applied </span>
            )}
            {discountCupon == null && <span> Invalid Coupon code</span>}

            <button
                className="button-discount btn btn-primary btn-sm"
                onClick={discountValues}>
                Apply discount
            </button>
            <button
                onClick={() => setOrder(true)}
                className="button-discount btn btn-success btn-sm">
                Order
            </button>
            <h5 className="checkout-price">
                Total Price: {Math.ceil(discountPrice)} Kr
            </h5>
            <input type="text" ref={userInput} placeholder="Enter Your name" />
            {order && (
                <Order
                    discountPrice={discountPrice}
                    {...context}
                    setOrder={setOrder}
                    setDiscountPrice={setDiscountPrice}
                    userInput={userInput.current.value}
                />
            )}
        </div>
    )
}

export default CheckoutPage
