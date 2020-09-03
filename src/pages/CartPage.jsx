import React, { useContext } from "react"
import Cart from "../components/Cart"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

export default function CartPage(props) {
    const { cartItems, totalSum, itemCount, clearCart } = useContext(
        CartContext
    )

    const checkOut = () => {}
    return (
        <div>
            <h2>Cart</h2>
            {cartItems.map((item) => (
                <Cart key={item.id} product={item} />
            ))}
            <div>total:{totalSum}</div>
            <div>itemCount:{itemCount}</div>
            <button onClick={() => clearCart()}>Clear Cart</button>
            <Link to="/checkout">Go to checkout</Link>
        </div>
    )
}
