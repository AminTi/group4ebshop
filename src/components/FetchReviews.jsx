import React, { useState, useEffect } from "react";
import axios from "axios";
import Reviews from "./Reviews";
// import ProductDetailed from "./ProductDetailed"
// import ProductList from "./ProductList";
// import ProductDetailed from "./ProductDetailed";

const FetchReviews = ({ productId }) => {
  const [data, setData] = useState({});

  const DataHandler = () => {
    axios
      .get(
        `https://mock-data-api.firebaseio.com/e-commerce/reviews/${productId}.json`
      )
      .then((res) => {
        if (res.data) {
          return setData(res.data);
        }
      });
  };

  useEffect(() => {
    DataHandler();
  }, []);


  return (
    <>
      <hr></hr>
      {Object.entries(data).map((item, index) => (
        <div key={index}>
          <h1>Reviews</h1>
          <h2>{item[1].title}</h2>
          <p>{item[1].description}</p>
        </div>
      ))}
    </>
  );
};

export default FetchReviews;
