"use client"

import React, { useEffect, useState } from 'react';
import Products from 'Components/Home/ProductList';
import Navbar from '@/Components/Home/Navbar';

const page = () => {

  return (
    <>
      <Navbar />
      <Products />
    </>
  )
}

export default page
