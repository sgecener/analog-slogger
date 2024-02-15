



export const UploadAndDisplayImage = ({ onUpload }) => {


  const UploadWidget = (clickEvent) => {
    clickEvent.preventDefault();
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dab09vwii",
        uploadPreset: "upload_widget",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          
          const image = document.getElementById("uploaded_img");

          image.setAttribute("src", result.info.url);
         
          onUpload(result.info.url);
        }
      }
    );
    widget.open();
  };

  return (
    <div>
      <h1>Upload image</h1>
      <img id="uploaded_img" src=""></img>
      <div>
      <button onClick={UploadWidget} className="btn-info">Upload</button>{" "}
      </div>
      {/* Button to initiate upload */}
    </div>
  );
};
