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

    const discountprice = discountCupon && discountCupon.discount
    const discountCounter = () => {
        setNaN(productTotalPrice)

        if (discountprice) {
            const disTotal = NotANumber * discountprice
            return disTotal
        } else {
            const finalPrice = NotANumber
            return finalPrice
        }
    }

    const ErrorCheck = () => {
        if (discountCupon && discountCupon.discount) {
            return (apiKey.current.disabled = true)
        }
    }

    const Check = () => {
        if (discountCupon == null) {
            return <span className="unValidCupon"> Invalid Coupon code</span>
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

            <input type="text" ref={apiKey} placeholder="Enter Coupon Code" />
            {ErrorCheck() && (
                <span className="validCupon"> Discount applied </span>
            )}
            {Check()}

            {/* {discountCupon == null && <span> Invalid Coupon code</span>} */}
            <button
                className="button-discount btn btn-primary btn-sm"
                onClick={discountValues}>
                Apply discount
            </button>
            <input
                type="text"
                ref={userInput}
                placeholder="Enter Your name"
                className="input-order-name"
            />

            <button
                onClick={() => setOrder(true)}
                className="button-discount btn btn-success btn-sm">
                Order
            </button>
            <h5 className="checkout-price">
                Total Price: {Math.ceil(discountPrice)} kr
            </h5>
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
