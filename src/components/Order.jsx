import React, { useEffect, useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import moment from "moment";
import { AiFillCloseCircle } from "react-icons/ai";

function Order({
  setOrder,
  discountPrice,
  cartItems,
  clearCart,
  setDiscountPrice,
  userInput,
  history,
}) {
  const [date] = useState(moment().format("LLL"));
  const postOrder = (discountPrice, cartItems) => {
    axios
      .post(
        "https://mock-data-api.firebaseio.com/e-commerce/orders/group4.json",
        {
          post_by: userInput,
          totalPrice: discountPrice,
          productList: cartItems,
          created_at: date,
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
        <h2>Thank You {userInput}</h2>
        <div className="modal-close">
          <AiFillCloseCircle onClick={() => history.push("/")} />
        </div>
        <span>Your Order On the Way</span>
        <button className="modal-conten" onClick={() => history.push("/")}>
          Buy More
        </button>
      </div>
    </div>
  );
}

export default withRouter(Order);
