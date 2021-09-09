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

  //test
  return (
    <div className="main-container row mx-5 wrapper-container">
      {Object.entries(data).map((item) => {
        return <ProductList key={item[0]} {...item[1]} />;
      })}

      {/* <buttton onClick={ClickHandler}></buttton> */}
      <buttton></buttton>
    </div>
  );
};

export default FetchData;
