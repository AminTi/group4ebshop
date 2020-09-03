import React, { useContext, useRef, useState, useEffect } from "react";
import axios from "axios";

import { CartContext } from "../context/CartContext";

import TableStartPage from "../components/TableStartPage";

function CheckoutPage() {
  const context = useContext(CartContext);
  const [discountCupon, setDescount] = useState({});
  const [inputValue, setinputValue] = useState();
  const apiKey = useRef();
  //const [styles, setStyles] = useState();

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
    if (
      inputValue === "BLACKFRIDAY" ||
      inputValue === "SUMMER19" ||
      inputValue === "BLACKFRIDAY2019"
    ) {
      return productTotalPrice * discountprice;
    } else {
      return productTotalPrice;
    }
  };

  const ErrorCheck = () => {
    if (
      inputValue === "BLACKFRIDAY" ||
      inputValue === "SUMMER19" ||
      inputValue === "BLACKFRIDAY2019"
    ) {
      return (apiKey.current.disabled = true);
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
      {ErrorCheck() && <span> Discount applied </span>}
      <button className="button-discount" onClick={discountValues}>
        {" "}
        Apply discount
      </button>
      <h5 className="checkout-price">Total Price: {discountCounter()}:-</h5>
    </div>
  );
}

export default CheckoutPage;
