import React from "react";
import FetchReviews from "./FetchReviews";

function ProductDetailed({ data }) {
  // console.log(data.images);
  // console.log("Data.id");
  // console.log(data.id);

  // const src = data.images ? data.images[0].src.small : "";
  // const productId = data.id ? data.id : "";

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.images[0].src.small} />
      <h2>{data.price} kr</h2>
      <p>{data.stock} in stock</p>
      <h3>{data.description}</h3>
      <FetchReviews productId={data.id} />
    </div>
  );
}

export default ProductDetailed;
