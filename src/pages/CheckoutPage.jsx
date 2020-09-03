import React, { useContext, useRef, useState, useEffect } from "react";
import axios from "axios";

import { CartContext } from "../context/CartContext";

import TableStartPage from "../components/TableStartPage";

function CheckoutPage() {
  const context = useContext(CartContext);
  const [discountCupon, setDescount] = useState({});

  const [inputValue, setinputValue] = useState();
  const apiKey = useRef();

  const descountApi = `https://mock-data-api.firebaseio.com/e-commerce/couponCodes/${inputValue}.json`;

  const discountValues = (e) => {
    setinputValue(apiKey.current.value.toUpperCase());
    axios.get(descountApi).then((res) => {
      setDescount(res.data);
    });
  };

  useEffect(() => {
    discountValues();
  }, [inputValue]);

  const discountprice = discountCupon && discountCupon.discount;
  let productTotalPrice = parseInt(context.totalSum);

  const discountCounter = () => {
    if (inputValue) {
      return productTotalPrice * discountprice;
    } else {
      return productTotalPrice;
    }
  };

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
            );
          })}
        </tbody>
        <tfoot></tfoot>
      </table>

      <input type="text" ref={apiKey} />
      <button onClick={discountValues}>Check for discount</button>
      <p className="checkout-price">Total Price: {discountCounter()}:-</p>
    </div>
  );
}

export default CheckoutPage;
