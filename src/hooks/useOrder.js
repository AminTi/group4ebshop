// const { useState } = require("react");

// import React, { useContext, useRef, useState, useEffect } from "react";
// import axios from "axios";

// // const discountApiUrl = `https://mock-data-api.firebaseio.com/e-commerce/couponCodes/${inputValue}.json`;
// const[discountValue, setDiscountValue]=useState(0)
// const[error, setError]=useState('')
// const[inputValue, setInputvalue]=useState('')

// const getDiscountCode=async (inputValue)=>{
//   const discountApiUrl = await axios(`https://mock-data-api.firebaseio.com/e-commerce/couponCodes/${inputValue}.json`);
//   setDiscountValue(discountApiUrl.discount)
// }

// useEffect(()=>{
//   getDiscountCode()
// }, [inputValue])