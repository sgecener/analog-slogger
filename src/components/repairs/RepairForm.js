import { useEffect, useState } from "react";
import { postRepair } from "../../services/repairService";
import { useNavigate, useParams } from "react-router-dom";
import { getCameraById } from "../../services/cameraService";

export const RepairForm = ({ currentUser }) => {
  
  const [body, setBody] = useState("");
  const [camera, setCamera] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const { cameraId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getCameraById(cameraId).then((data) => {
      setCamera(data);
    });
  }, [cameraId]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRepair = {
      userId: currentUser.id,
      staffId: null,
      cameraId: camera.id,
      description: body,
      rush: isChecked,
      completed: false,
    };

    postRepair(newRepair).then(() => {
      navigate(`/repairs`);
    });
  };

  return !currentUser || currentUser.staff ? (
    <div>
      <div className="login-msg">Create a user account to send a repair order!</div>
      <div className="login-msg">Please :<span>&#41;</span></div>
    </div>
  ) : (
    <form>
      <h2>Repair Form</h2>

      <fieldset>
        <div className="form-group">
          <label>Name:</label>
          <div value={camera.id}>{camera.name}</div>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Description</label>
          <textarea
            type="text"
            placeholder="Enter text..."
            value={body}
            onChange={(event) => setBody(event.target.value)}
            required
            className="form-control"
          />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label>Rush Order +$50</label>
          <input
            type="checkbox"
            value={isChecked}
            onChange={(event) => setIsChecked(event.target.checked)}
            required
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button className="form-btn btn-secondary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </fieldset>
    </form>
  );
};
