import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductDetailed from "./ProductDetailed";
// import ProductList from "./ProductList";
// import ProductDetailed from "./ProductDetailed";

const FetchDataDescribed = ({ productId }) => {
  const [data, setData] = useState({});

  const DataHandler = () => {
    axios
      .get(
        `https://mock-data-api.firebaseio.com/e-commerce/products/${productId}.json`
      )
      .then((res) => {
        return setData(res.data);
      });
  };

  useEffect(() => {
    DataHandler();
  }, []);

  return (
    <>
      <ProductDetailed data={data} />
    </>
  );
};

export default FetchDataDescribed;
