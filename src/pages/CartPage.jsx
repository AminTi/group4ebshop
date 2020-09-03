import React, { useContext } from "react"
import Cart from "../components/Cart"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

export default function CartPage(props) {
    console.log(props)
    const { cartItems, totalSum, itemCount, clearCart } = useContext(
        CartContext
    )
    console.log(cartItems)

    const checkOut = () => {}
    return (
        <div className="cartpage">
            <h2>Your Cart</h2>
            {cartItems.map((item) => (
                <Cart key={item.id} product={item} />
            ))}
            <div>Total: {totalSum}:-</div>
            <div>Items: {itemCount} pcs</div>
            <button onClick={() => clearCart()} className="button-clear">
                Clear Cart
            </button>
            <button className="button-checkout">
                <Link to="/checkout" className="link-checkout">
                    Go to checkout
                </Link>
            </button>
        </div>
    )
}
