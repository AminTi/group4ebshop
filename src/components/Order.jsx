import React, { useEffect, useState } from "react";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
import axios from "axios";

import { AiFillCloseCircle } from "react-icons/ai";

function Order({
  setOrder,
  discountPrice,
  cartItems,
  clearCart,
  setDiscountPrice,
}) {
  const [date, setDate] = useState(Date.now());

  const postOrder = (discountPrice, cartItems) => {
    axios
      .post(
        "https://mock-data-api.firebaseio.com/e-commerce/orders/group4.json",
        {
          post_by: "amin",
          posted_at: distanceInWordsToNow(date),
          totalPrice: discountPrice,
          productList: cartItems,
        }
      )
      .then(function (response) {
        console.log(response);
        setDiscountPrice(0);
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
