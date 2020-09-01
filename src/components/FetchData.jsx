<<<<<<< HEAD
import React, { useState, useEffect } from "react"
import axios from "axios"
import ProductList from "./ProductList"
=======
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import ProductDetailed from "./ProductDetailed";
>>>>>>> b7c748d0089ed4bba57ed1c78f2db859b3aeaca8

const FetchData = () => {
    const [data, setData] = useState({})

<<<<<<< HEAD
    const DataHandler = () => {
        axios
            .get(
                "https://mock-data-api.firebaseio.com/e-commerce/products.json"
            )
            .then((res) => {
                console.log(res.data)
                console.log(Object.entries(res.data))
                setData(res.data)
            })
    }
=======
  const DataHandler = () => {
    axios
      .get("https://mock-data-api.firebaseio.com/e-commerce/products.json")
      .then((res) => {
        return setData(res.data);
      });
  };
>>>>>>> b7c748d0089ed4bba57ed1c78f2db859b3aeaca8

    useEffect(() => {
        DataHandler()
    }, [])

<<<<<<< HEAD
    return (
        <div className="main-container">
            {Object.entries(data).map((item) => {
                return (
                    <ProductList
                        key={item[0]}
                        description={item[1].description}
                        name={item[1].name}
                        price={item[1].price}
                        rating={item[1].rating}
                        stock={item[1].stock}
                        images={item[1].images}
                    />
                )
            })}
        </div>
    )
}
=======
  return (
    <>
      {Object.entries(data).map((item) => {
        return (
          <ProductList
            key={item[0]}
            description={item[1].description}
            name={item[1].name}
            price={item[1].price}
            rating={item[1].rating}
            stock={item[1].stock}
            images={item[1].images}
          />
        );
      })}
      {Object.entries(data).map((item) => {
        return (
          <ProductDetailed
            key={item[0]}
            description={item[1].description}
            name={item[1].name}
            price={item[1].price}
            rating={item[1].rating}
            stock={item[1].stock}
            images={item[1].images}
          />
        );
      })}
    </>
  );
};
>>>>>>> b7c748d0089ed4bba57ed1c78f2db859b3aeaca8

export default FetchData
