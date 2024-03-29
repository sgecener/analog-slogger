import { useEffect, useState } from "react";
import { editRepair, getRepairById } from "../../services/repairService";
import { useNavigate, useParams } from "react-router-dom";

export const EditRepairForm = () => {
  const [repair, setRepair] = useState({});

  const navigate = useNavigate()

  const { repairId } = useParams();

  useEffect(() => {
    getRepairById(repairId).then((data) => {
      setRepair(data);
    });
  }, [repairId]);

 

  const handleEdit = (e) => {
    e.preventDefault();

    const editedRepair = {
        id: repair.id,
        userId: repair.userId,
        cameraId: repair.cameraId,
        description: repair.description,
        rush: repair.rush,
        completed: repair.completed
    }

    editRepair(editedRepair).then(() => {
        navigate("/repairs")
    })

} 

  return (
    <form>
      <h2>Edit Repair Form</h2>

      <fieldset>
        <div className="form-group">
          <label>Description: </label>
          <textarea
            type="text"
            value={repair?.description}
            onChange={(event) => {
              const copy = { ...repair };
              copy.description = event.target.value;
              setRepair(copy);
            }}
            required
            className="form-control"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button className="form-btn btn-secondary" onClick={handleEdit}>Submit</button>
        </div>
      </fieldset>
    </form>
  );
};
