import { useNavigate } from "react-router-dom";
import { deleteRepair } from "../../services/repairService";
import { useState } from "react";





export const CustomerRepairs = ({camera, repairObj, renderRepairs}) => {

    const [formBody, setFormBody] = useState('')
    

    const navigate = useNavigate()

    const handleEdit = () => {

        const editedRepair = {
            id: repairObj.id,
            description: repairObj.description
        }
    } 

    

    const handleDelete = () => {
        deleteRepair(repairObj.id).then(() => {
            renderRepairs()
        })
      }

  return (
    <div>
      <div>{camera[0]?.name}</div>
      <div>{repairObj.description}</div>
      <div>
        <button className="btn-secondary">Edit</button>
        <button className="btn-warning" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};
