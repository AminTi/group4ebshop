import React from "react"
import { Link } from "react-router-dom"
import { FiShoppingCart } from "react-icons/fi"
import { CartContext } from "../context/CartContext"
import { useContext } from "react"
export default function Layout({ children }) {
    const { itemCount } = useContext(CartContext)
    return (
        <div>
            <header className="header">
                <Link className="header-home link" to="/">
                    Home
                </Link>
                <Link className="header-cart link" to="/cart">
                    <FiShoppingCart />
                    {`(${itemCount})`}
                </Link>
            </header>
            {children}
            <footer className="footer">
                <p>This is a footer</p>
            </footer>
        </div>
    )
}
