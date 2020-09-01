import React from "react";

function ProductDetailed({ data }) {
  console.log(data.images);

  const src = data.images ? data.images[0].src.small : "";

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={src} />

      {/* <image src={data.images} /> */}
      <h2>{data.price}</h2>
    </div>
  );
}

export default ProductDetailed;
