import React from "react";

function ProductDetailed({ data }) {
  console.log(data.images);

  const src = data.images ? data.images[0].src.small : "";

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={src} />

      {/* <image src={data.images} /> */}
      <h2>{data.price} kr</h2>
      <p>{data.stock} in stock</p>
      <h3>{data.description}</h3>
    </div>
  );
}

export default ProductDetailed;
