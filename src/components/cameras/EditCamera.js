import { useState, useEffect } from "react";
import {
  editCamera,
  getAllCameras,
  getCameraById,
} from "../../services/cameraService";
import { useNavigate, useParams } from "react-router-dom";

export const EditCamera = () => {
  const [cameras, setCameras] = useState([]);
  const [camera, setCamera] = useState({});
  const { camId } = useParams();
  const [type, setType] = useState("");

  const types = [...new Set(cameras.map((camera) => camera.type))];

  const navigate = useNavigate();

  useEffect(() => {
    getAllCameras().then((data) => {
      setCameras(data);
    });
  }, []);

  useEffect(() => {
    getCameraById(camId).then((data) => {
      setCamera(data);
    });
  }, [camId]);

  const handleEdit = (e) => {
    e.preventDefault();

    const editedCamera = {
      id: camera.id,
      name: camera.name,
      type: camera.type,
      photo: camera.photo,
      price: camera.price,
    };

    editCamera(editedCamera).then(() => {
      navigate("/catalog");
    });
  };

  return (
    <form className="form-group">
      <h1>Edit Camera</h1>
      {/* <fieldset>
        <UploadAndDisplayImage
          cameras={cameras}
          onUpload={(data) => setPhotoData(data)}
        />
      </fieldset> */}
      <fieldset>
        <div>
          <label>Type </label>
          <select
            required
            value={camera?.type}
            onChange={(event) => {
              const copy = { ...camera };
              copy.type = event.target.value;
              setCamera(copy);
            }}
          >
            <option value={type} key={type}>
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
            value={camera?.name}
            onChange={(event) => {
              const copy = { ...camera };
              copy.name = event.target.value;
              setCamera(copy);
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
            value={camera?.price}
            onChange={(event) => {
              const copy = { ...camera };
              copy.price = event.target.value;
              setCamera(copy);
            }}
            required
            className="form-control"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button className="form-btn btn-primary" onClick={handleEdit}>
            Done
          </button>
        </div>
      </fieldset>
    </form>
  );
};
