import React from "react"
import { Link } from "react-router-dom"
import { FiShoppingCart } from "react-icons/fi"
import { CartContext } from "../context/CartContext"
import { useContext } from "react"
export default function Layout({ children }) {
    const { itemCount } = useContext(CartContext)
    return (
        <div>
            <header className="header navbar fixed-top navbar-light bg-light mb-4">
                <Link className="header-home link navbar-brand" to="/">
                    Home
                </Link>
                <Link className="header-cart link" to="/cart">
                    <FiShoppingCart />
                    {`(${itemCount})`}
                </Link>
            </header>
            {children}
            <div className="card text-center mt-4">
                <div className="card-header">This is a footer</div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer posuere erat a ante.
                        </p>
                    </blockquote>
                </div>
            </div>
        </div>
    )
}
