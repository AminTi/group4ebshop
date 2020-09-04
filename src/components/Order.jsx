import React, { useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import axios from "axios";

import { AiFillCloseCircle } from "react-icons/ai";

function Order({ setOrder, discountPrice, cartItems, clearCart }) {
  console.log(discountPrice);
  console.log(cartItems);
  console.log(clearCart);

  const postOrder = (discountPrice, cartItems) => {
    axios
      .post(
        "https://mock-data-api.firebaseio.com/e-commerce/orders/group4.json",
        {
          post_by: "ramy",
          posted_at: formatDistanceToNow(Date.now()),
          totalPrice: discountPrice,
          productList: cartItems,
        }
      )
      .then(function (response) {
        console.log(response);
      });
  };

  useEffect(() => {
    clearCart();
    postOrder(discountPrice, cartItems);
  }, []);

  return (
    <div className="backdrop">
      <div className="modal">
        <h2>Thank You</h2>
        <div className="modal-close">
          <AiFillCloseCircle onClick={() => setOrder(false)} />
        </div>
        <span>Your Order On the Way</span>
        <button className="modal-conten">Buy More</button>
      </div>
    </div>
  );
}

export default Order;
