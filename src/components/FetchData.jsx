import React, { useState, useEffect } from "react"
import axios from "axios"

const FetchData = () => {
    const [data, setData] = useState()

    const DataHandler = () => {
        axios
            .get(
                "https://mock-data-api.firebaseio.com/e-commerce/products.json"
            )
            .then((res) => {
                return setData(res.data)
            })
    }

    useEffect(() => {
        DataHandler()
    }, [])

    console.log(data)

    return <div>{data && Object.entries(data).map}</div>
}

export default FetchData
