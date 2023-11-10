import React, { useState } from 'react'

const FileUploader = () => {
    const [selectedImages, setSelectedImages] = useState([]);
    const ImageUploadFunc = (e) => {
        const files = Array.from(e.target.files);
        // Check if the total number of selected images is less than or equal to 3
        if (selectedImages.length + files.length <= 3) {
            setSelectedImages((prevImages) => [...prevImages, ...files]);
        } else {
            alert("You can only upload up to 3 images.");
        }
    };
    const deleteImage = (index) => {
        if (index > -1) {
            const newImg = [...selectedImages];
            newImg.splice(index, 1);
            setSelectedImages(newImg);
        }
    };
    return (

        <>
            <div className="box">
                <div >
                    <h1>Image Upload and Preview</h1>
                    <input type="file" accept="image/*" multiple onChange={ImageUploadFunc} required className='text-sm' />
                    <div className="flex ">
                        {selectedImages.map((image, index) => (
                            <div className="group relative" key={index}>
                                <img className='h-20 p-2' src={URL.createObjectURL(image)} alt={`Preview ${index}`} />
                                <div className="group-hover:flex hidden absolute top-0 right-0 bg-slate-200 rounded-full p-2 cursor-pointer">
                                    <img width="18" height="18" onClick={() => deleteImage(index)} src="https://img.icons8.com/ios-glyphs/30/000000/multiply.png" alt="multiply" />

                                </div>
                            </div>
                        ))}</div>
                </div>
            </div>
        </>
    )
}

export default FileUploader
