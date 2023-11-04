import React from 'react'
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const ProductForm = ({ formWidth, initialValuesObj, topHeading, onSubmitForm}) => {
  return (
    <>
        <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-7 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 ">{topHeading}</h1>
          </div>
          <div className={`mx-auto ${formWidth === true ? 'lg:w-1/2 md:w-2/3' : ''}`}>
            <div className="flex flex-wrap m-2 border-solid border-2 border-indigo-600 rounded-2xl">
              <Formik
                initialValues={initialValuesObj}
                enableReinitialize={true}
                validationSchema={Yup.object({
                  productName: Yup.string().trim().required('Enter Product Name').min(1, 'Product Name is required'),
                  color: Yup.string().trim().required('Enter Product Color').min(1, 'Product Color is required'),
                  category: Yup.string().trim().required('Enter Product Category').min(1, 'Product Category is required'),
                  price: Yup.number()
                  .required('Enter Product Price')
                  .min(0.01, 'Product Price is required') // Adjust the minimum value as needed
                  .typeError('Price must be a valid number'), // Custom error message for invalid numbers
                })}
                onSubmit={onSubmitForm}>

                <Form className='w-full'>
                  {/* Product name */}
                  <div className='p-2'>
                    <label className="leading-7 text-sm text-gray-600">
                      Product name:
                    </label>
                    <Field
                      type='text'
                      name="productName"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <ErrorMessage component='div' name='productName' className='text-red-600'></ErrorMessage>
                  </div>
                  {/* Product name */}
                  <div className='p-2'>
                    <label className="leading-7 text-sm text-gray-600">
                      Product Color:
                    </label>
                    <Field
                      type='text'
                      name="color"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <ErrorMessage component='div' name='color' className='text-red-600'></ErrorMessage>
                  </div>
                  {/* Product name */}
                  <div className='p-2'>
                    <label className="leading-7 text-sm text-gray-600">
                      Product Category:
                    </label>
                    <Field
                      type='text'
                      name="category"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <ErrorMessage component='div' name='category' className='text-red-600'></ErrorMessage>
                  </div>
                  {/* Product name */}
                  <div className='p-2'>
                    <label className="leading-7 text-sm text-gray-600">
                      Product Price:
                    </label>
                    <Field
                      type='text'
                      name="price"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <ErrorMessage component='div' name='price' className='text-red-600'></ErrorMessage>
                  </div>

                  {/* Button */}
                  <div className="p-2 w-full">
                    <button
                      type="submit"
                      className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Submit
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductForm
