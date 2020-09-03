import React, { useState, useEffect, useRef } from "react"

const TableStartPage = ({ img, name, quantity, price, totalPrice }) => {
    return (
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
                <tr>
                    <td>
                        <div className="container-tableImg">
                            <img src={img} className={"tableImg"} />
                        </div>
                    </td>
                    <td>{name}</td>
                    <td>{quantity}</td>
                    <td>{price}</td>
                </tr>
            </tbody>
            <tfoot></tfoot>
        </table>
    )
}

export default TableStartPage
