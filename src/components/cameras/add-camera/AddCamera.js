import { useEffect, useState } from "react";
import { getAllCameras, postCamera } from "../../../services/cameraService";
import { useNavigate } from "react-router-dom";
import { UploadAndDisplayImage } from "./UploadPicture";

export const AddCamera = () => {
  const navigate = useNavigate();

  const [cameras, setCameras] = useState([]);
  const [photoData, setPhotoData] = useState(null);

  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const types = [...new Set(cameras.map((camera) => camera.type))];

  useEffect(() => {
    getAllCameras().then((data) => {
      setCameras(data);
    });
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();

    const newCamera = {
      name: name,
      type: type,
      photo: photoData,
      price: price,
    };

    postCamera(newCamera).then(navigate("/catalog"));
  };

  return (
    <form className="form-group">
      <h1>Add New Camera</h1>
      <fieldset>
        <UploadAndDisplayImage cameras={cameras} onUpload={(data) => setPhotoData(data)}/>
      </fieldset>
      <fieldset>
        <div>
          <label>Type </label>
          <select
            required
            onChange={(event) => {
              setType(event.target.value);
            }}
          >
            <option value={type} key={type.id}>
              Select a Type...
            </option>
            {types.map((type) => {
              return (
                <option value={type} key={type} required>
                  {type}
                </option>
              );
            })}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            placeholder="Enter name of camera..."
            onChange={(event) => {
              setName(event.target.value);
            }}
            required
            className="form-control"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            placeholder="Enter price..."
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            required
            className="form-control"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button className="form-btn btn-primary" onClick={handleAdd}>
            Add
          </button>
        </div>
      </fieldset>
    </form>
  );
};
