import React, { useState, useEffect } from "react";
import axios from "axios";
import Reviews from "./Reviews";

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

  console.log(data);

  return (
    <>
      <h5 className="card-header">Reviews</h5>
      {Object.keys(data).length ? (
        <>
          {Object.entries(data).map((item, index) => (
            <div key={index} className="card-body">
              <div className="card">
                <h6 className="card-header">{item[1].title}</h6>
                <div className="card-body">
                  <p>{item[1].description}</p>
                  <footer className="blockquote-footer">
                    {item[1].author.name} {item[1].date}
                  </footer>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <span>No Reviews</span>
      )}
    </>
  );
};

export default FetchReviews;
