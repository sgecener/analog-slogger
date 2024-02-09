
import React, { useState } from "react";
import { Cloudinary } from "@cloudinary/react"



export const UploadAndDisplayImage = ({ onUpload }) => { // Receive onUpload prop from parent component

  const [selectedImage, setSelectedImage] = useState(null);


  const cld = new Cloudinary({cloud: {cloudName: 'dab09vwii'}});

  Cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });

  const handleUpload = () => {
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result;
        localStorage.setItem("uploadedImage", imageDataUrl); // Store the image data in local storage
        onUpload(imageDataUrl); // Send the image data URL to the parent component
      };
      reader.readAsDataURL(selectedImage);
      setSelectedImage(null); // Reset selected image state
    }
  };

  return (
    <div>
      <h1>Upload image</h1>
      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}

      <br />
      <br />
      
      <input
        type="file"
        name="cameraUpload"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
      
      <button onClick={handleUpload}>Upload</button> {/* Button to initiate upload */}
    </div>
  );
};