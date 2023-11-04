import React, { useEffect, useState } from 'react';
import ProductForm from './ProductForm';

const CustomModal = ({ modalOpen, setmodalOpen, editProductData, finalProductdata, setFinalProductdata }) => {
  // I get editProductData to show what user filled previously
  // finalProductdata  is the first state also on which map function is applied in Productlist.js

  const [updatedProducts, setUpdatedProducts] = useState([])

  const submitFunc = (values) => {
    // console.log('current: ', [values]);
    // console.log('all: ', finalProductdata);
    const sameVal = finalProductdata.filter((product) => {
      return product.id !== values.id;
    });
    
    // console.log();
    setFinalProductdata([...sameVal, values])
    setmodalOpen(false)
  }

  // useEffect(() => {
  //   // console.log(updatedProducts);
  // }, [updatedProducts]);


  // setFinalProductdata(updatedProducts)

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className={`modal
       ${modalOpen === true ? 'modal-open' : ""}
      `}>
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setmodalOpen(false)}>✕</button>
          </form>

          <ProductForm formWidth={false} initialValuesObj={editProductData} topHeading="Edit Product Data" onSubmitForm={submitFunc} />
        </div>
      </dialog>

    </>
  );
};

export default CustomModal;
