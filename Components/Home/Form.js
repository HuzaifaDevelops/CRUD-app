'use client'
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ImageUploader from './ImageUploader';

const LoginForm = (props) => {

    const countryOptions = [
        'Select a country',
        'United States',
        'Canada',
        'United Kingdom',
        'Australia',
        'Pakistan',
    ];
    return (
        <>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{props.title}</h1>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2 border-solid border-2 border-indigo-600 rounded-2xl">
                            <Formik
                                initialValues={{ name: '', email: '', message: '', gender: 'male', country: '', human: false }}
                                validationSchema={Yup.object({
                                    name: Yup.string().required('Name is required'),
                                    email: Yup.string().email('Invalid email address').required('Email is required'),
                                    message: Yup.string().required('Message is required'),
                                    gender: Yup.string().oneOf(["male", "female", 'Select gender']).required('Gender is required'),
                                    country: Yup.string().notOneOf(['Select a country'], 'Please select a country').required('Country is required'),
                                    human: Yup.boolean().oneOf([true], 'You must confirm that you are human') // It must be true
                                        .required('You must confirm that you are human'),
                                })}
                                onSubmit={(values, action) => {
                                    console.log(values);
                                    action.resetForm();
                                }}
                            >
                                <Form className='w-full'>
                                    {/* Name */}
                                    <div className="p-2">
                                        <div className="relative">
                                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                                                Name
                                            </label>
                                            <Field
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                            <ErrorMessage name="name" component="div" className="text-red-800" />
                                        </div>
                                    </div>
                                    {/* Email */}
                                    <div className="p-2">
                                        <div className="relative">
                                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                                Email
                                            </label>
                                            <Field
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                            <ErrorMessage name="email" component="div" className="text-red-800" />
                                        </div>
                                    </div>
                                    {/* Message */}
                                    <div className="p-2 w-full">
                                        <div className="relative">
                                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                                                Message
                                            </label>
                                            <Field
                                                as="textarea"
                                                id="message"
                                                name="message"
                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                            />
                                            <ErrorMessage name="message" component="div" className="text-red-800" />
                                        </div>
                                    </div>
                                    {/* Gender selection */}
                                    <div className="p-2">
                                        <div className="relative">
                                            <label className="leading-7 text-sm text-gray-600">Gender</label>
                                            <div>
                                                <label>
                                                    <Field type="radio" name="gender" value="male" className="m-2" /> Male
                                                </label>
                                                <label>
                                                    <Field type="radio" name="gender" value="female" className="m-2" /> Female
                                                </label>
                                            </div>
                                            <ErrorMessage name="gender" component="div" className="text-red-800" />
                                        </div>
                                    </div>

                                    {/* country selection */}

                                    <div className="p-2">
                                        <div className="relative">
                                            <label className="leading-7 text-sm text-gray-600">Country</label>
                                            <Field as="select" name="country" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                                {countryOptions.map((country, index) => (
                                                    <option key={index} value={country}>
                                                        {country}
                                                    </option>
                                                ))}
                                            </Field>
                                            <ErrorMessage name="country" component="div" className="text-red-800" />
                                        </div>
                                    </div>
                                    {/* Checkbox selection */}

                                    <div className="p-2">
                                        <div className="relative">
                                            <Field type="checkbox" name="human" /> Are you Human?
                                            <ErrorMessage name="human" component="div" className="text-red-800" />
                                        </div>
                                    </div>

                                    <ImageUploader/>

                                    {/* Button */}
                                    <div className="p-2 w-full">
                                        <button
                                            type="submit"
                                            className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                            Button
                                        </button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default LoginForm;
