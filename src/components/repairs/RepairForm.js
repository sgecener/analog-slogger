import { useEffect, useState } from "react";
import { postRepair } from "../../services/repairService";
import { useNavigate } from "react-router-dom";
import { getAllCameras } from "../../services/cameraService";

export const RepairForm = ({ currentUser }) => {

  const [name, setName] = useState("");
  const [body, setBody] = useState("")
  const [camera, setCamera] = useState({})
  const [isChecked, setIsChecked] = useState(false)

  const navigate = useNavigate()

    useEffect(() => {
        getAllCameras().then((data) => {
            const camObj = data[0]
            setCamera(camObj)
        })
    })


  const handleSubmit = (event) => {
    event.preventDefault()
    

    const editedRepair =  {
        
        
        userId: currentUser.id,
        cameraId: camera.id ,
        description: body,
        rush: false,
        completed: false
    }

    postRepair(editedRepair).then(() => {
        navigate(`/repairs`)
    })
  } 

  return (
    <form >
      <h2>Repair Form</h2>
    
      <fieldset>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            placeholder="Enter text..."
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
            value=""
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
