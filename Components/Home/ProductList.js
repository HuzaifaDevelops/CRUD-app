
import React, { useState, useEffect } from 'react';
import CustomModal from './CustomModal';
import NewModal from './NewModal';
import ProductForm from './ProductForm';
import { MdDeleteOutline, MdOutlineEditNote } from "react-icons/md";


const Page = () => {
  const [productData, setProductData] = useState([]);
  const [EditmodalOpen, setEditmodalOpen] = useState(false);
  const [DeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editProduct, setEditProduct] = useState();

  useEffect(() => {
    console.log(productData);
  }, [productData]);

  const editProductFunc = (product) => {
    setEditProduct(product)
    setEditmodalOpen(true)
  }

  const deleteProductFunc = (product) => {
    setEditProduct(product)
    setDeleteModalOpen(true);
    // console.log(editProduct);
  }

  let initialValuesObj = {
    productName: '',
    color: '',
    category: '',
    price: '',
  }
  let submitFunc = function (values, actions) {
    // Add an 'id' property with the index as the value
    try {
      const updatedProduct = { ...values, id: productData.length };
      setProductData([...productData, updatedProduct]);
      actions.resetForm(initialValuesObj);
      // console.log(productData);
    } catch (error) {
      console.log(error);
    }

  }

  // let submitFunc = () => {

  // }

  return (
    <>

      <ProductForm productData={productData} setProductData={setProductData} formWidth={true} initialValuesObj={initialValuesObj} topHeading='Add Your Product' onSubmitForm={submitFunc} />

      <div className='flex justify-center '>
        <div className="relative overflow-x-auto  w-3/4">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            {
              productData.map((productDetails, index) => {

                return <tbody key={index} id={index}>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {/* Product name */}
                      {productDetails.productName}
                    </th>
                    <td className="px-6 py-4">
                      {/* Product color */}
                      {productDetails.color}
                    </td>
                    <td className="px-6 py-4">
                      {/* Product category */}
                      {productDetails.category}
                    </td>
                    <td className="px-6 py-4">
                      {/* Product price */}
                      {productDetails.price}
                    </td>
                    <td className="px-6 py-4 flex text-2xl">
                      {/* Action */}
                      <MdOutlineEditNote onClick={() => { editProductFunc(productDetails) }} className='text-indigo-600 cursor-pointer ' />
                      <MdDeleteOutline onClick={() => { deleteProductFunc(productDetails) }} className='text-indigo-600 cursor-pointer ml-6' />
                    </td>
                  </tr>
                </tbody>
              })}

          </table>
        </div>
      </div>
      <CustomModal modalOpen={EditmodalOpen} setmodalOpen={setEditmodalOpen} editProductData={editProduct} setEditProduct={setEditProduct} finalProductdata={productData} setFinalProductdata={setProductData} />
      <NewModal modalOpen={DeleteModalOpen} setModalOpen={setDeleteModalOpen} initialProductData={editProduct} finalProductData={productData} setFinalProductdata={setProductData}
      />
    </>
  )
}

export default Page
