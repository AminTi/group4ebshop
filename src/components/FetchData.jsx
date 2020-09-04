import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import ProductDetailed from "./ProductDetailed";

const FetchData = () => {
  const [data, setData] = useState({});

  const DataHandler = () => {
    axios
      .get("https://mock-data-api.firebaseio.com/e-commerce/products.json")
      .then((res) => {
        // console.log(Object.entries(res.data));
        setData(res.data);
      });
  };

  useEffect(() => {
    DataHandler();
  }, []);

  return (
    <div className="main-container row mx-2">
      {Object.entries(data).map((item) => {
        return <ProductList key={item[0]} {...item[1]} />;
      })}
    </div>
  );
};

export default FetchData;
