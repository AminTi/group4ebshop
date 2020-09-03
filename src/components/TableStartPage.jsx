import React from "react";

const TableStartPage = ({ img, name, quantity, price }) => {
  return (
    <tr scope="row">
      <td>
        <div className="checkout-image-wrapper">
          <img src={img} className={"checkout-image"} />
        </div>
      </td>
      <td>{name}</td>
      <td>{quantity} pcs</td>
      <td>{price}:-</td>
    </tr>
  );
};

export default TableStartPage;
