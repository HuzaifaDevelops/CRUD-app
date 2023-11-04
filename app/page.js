"use client"

import React, { useState } from 'react';
import Products from 'Components/Home/ProductList';
import Navbar from '@/Components/Home/Navbar';
import CustomModal from '@/Components/Home/CustomModal';




const page = () => {
  return (
    <>
      <Navbar />
      <Products />
    </>
  )
}

export default page
