import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"

function CheckoutPage() {
    const context = useContext(CartContext)
    console.log(context)

    return (
        <div>
            <h3>CheckoutPage</h3>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th> Product</th>
                        <th> Quantity </th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {context.cartItems.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <div className="container-tableImg">
                                    <img
                                        src={item.image}
                                        className={"tableImg"}
                                    />
                                </div>
                            </td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Sum</td>
                        <td>{context.totalSum}</td>
                        <td> Discount coupon </td>
                        <td>
                            <input type="text" />
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default CheckoutPage
