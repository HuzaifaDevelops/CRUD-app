import React, { useRef, useState } from 'react';

const DragFiles = ( ) => {
  // State to keep track of selected images
  const [selectedImages, setSelectedImages] = useState([]);

  // Ref for the file input element
  const inputRef = useRef(null);

  // State to track whether a drag-and-drop operation is active
  const [dragActive, setDragActive] = useState(false);

  // Function to handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      // Set dragActive to true when a file is dragged over the drop area
      setDragActive(true);
    } else if (e.type === "dragleave") {
      // Set dragActive to false when a file is dragged out of the drop area
      setDragActive(false);
    }
  };

  // Function to handle file drop event
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Convert the dropped files to an array
      const files = Array.from(e.dataTransfer.files);
      // Check if the total number of selected images is less than or equal to 3
      if (selectedImages.length + files.length <= 3) {
        // Add the dropped files to the selectedImages state
        setSelectedImages((prevImages) => [...prevImages, ...files]);
      } else {
        // Display an alert if more than 3 images are selected
        alert("You can only upload up to 3 images.");
      }
    }
  };

  // Function to handle file selection via the file input
  const handleChange = function (e) {
    e.preventDefault();
    // Convert the selected files to an array
    const files = Array.from(e.target.files);
    // Check if the total number of selected images is less than or equal to 3
    if (selectedImages.length + files.length <= 3) {
      // Add the selected files to the selectedImages state
      setSelectedImages((prevImages) => [...prevImages, ...files]);
    } else {
      // Display an alert if more than 3 images are selected
      alert("You can only upload up to 3 images.");
    }
  };

  // Function to trigger the file input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  // Function to delete a selected image by index
  const deleteImage = (index) => {
    if (index > -1) {
      // Create a new array without the deleted image
      const newImages = [...selectedImages];
      newImages.splice(index, 1);
      // Update the selectedImages state
      setSelectedImages(newImages);
    }
  };

  return (
    <>
      <div id="form-file-upload" className="text-center relative" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
        <input ref={inputRef} type="file" id="input-file-upload" className='hidden' multiple={true} onChange={handleChange} />
        <label
          id="label-file-upload"
          htmlFor="input-file-upload"
          className={`
            flex items-center justify-center border-2 rounded-lg border-dashed border-cbd5e1 bg-f8fafc
            ${dragActive ? "drag-active" : ""}`}
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
        >
          <div>
            <p>Drag and drop your file here or</p>
            <button className="upload-button" onClick={onButtonClick}>Upload a file</button>
          </div>
        </label>
        {dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>}

        <div className="flex mt-2">
          {selectedImages.map((image, index) => (
            <div className="group relative" key={index}>
              <img className='h-20 p-2 ml-2 border-2' src={URL.createObjectURL(image)} alt={`Preview ${index}`} />
              <div className="group-hover:flex hidden absolute top-0 right-0 bg-slate-200 rounded-full p-1 cursor-pointer">
                <img width="20" height="20" onClick={() => deleteImage(index)} src="https://img.icons8.com/ios-glyphs/30/000000/multiply.png" alt="multiply" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DragFiles;
