'use client'

import React from 'react'
import { MdDeleteOutline } from 'react-icons/md'

const deleteModal = ({ modalOpen, setModalOpen, initialProductData, finalProductData, setFinalProductdata }) => {


    const deleteProductFunc = () => {
        let newArr = [initialProductData]
        const uniqueValues = finalProductData.filter((value) => !newArr.includes(value));
        console.log(uniqueValues);
        setFinalProductdata(uniqueValues)
        // console.log(newArr);
        setModalOpen(false)
    }

    return (
        <>
            <dialog id="my_modal_3" className={`modal
                ${modalOpen === true ? 'modal-open' : ""}
                `}>
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setModalOpen(false)}>✕</button>
                    </form>
                    <button className="btn btn-error" onClick={deleteProductFunc}>Confirm delete <MdDeleteOutline className='text-2xl' /></button>
                </div>
            </dialog >
        </>
    )
}

export default deleteModal
