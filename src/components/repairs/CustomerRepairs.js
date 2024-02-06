import { useNavigate } from "react-router-dom";
import { deleteRepair } from "../../services/repairService";





export const CustomerRepairs = ({camera, repairObj, renderRepairs}) => {

    
    const navigate = useNavigate()

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
        <button className="btn-secondary" onClick={() => {navigate(`/repairs/${repairObj.id}`)} }>Edit</button>
        <button className="btn-warning" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};
