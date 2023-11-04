"use client"

import React, { useEffect, useState } from 'react';
import Products from 'Components/Home/ProductList';
import Navbar from '@/Components/Home/Navbar';
import CustomModal from '@/Components/Home/CustomModal';

const page = () => {
  const [productData, setProductData] = useState([]);

  // useEffect(() => {
  //   // storing todos items
  //   const temp = JSON.stringify(productData);
  //   localStorage.setItem('todos', temp);
  // }, [productData]);

  // let func = () => {
  //   setProductData((prevState) => ({
  //     ...prevState,
  //     secondKey: 'value',
  //   }));
  // }

  return (
    <>
      <Navbar />
      <Products />
      {/* <button className='btn btn-error' onClick={func}>submit</button> */}
    </>
  )
}

export default page
