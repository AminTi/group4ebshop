import React from "react";
// import ProductDetailed from "../components/ProductDetailed";
import FetchDataDescribed from "../components/FetchDataDescribed";

export default function DetailedPage(props) {
  // console.log(props);

  const productId = props.match.params.id;

  return (
    <div className="detail-container">
      <FetchDataDescribed productId={productId} />
    </div>
  );
}
