import { useNavigate } from "react-router-dom";
import { deleteRepair } from "../../services/repairService";
import "./ActiveRepairs.css";
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";

export const CustomerRepairs = ({ camera, repairObj, renderRepairs }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRepair(repairObj.id).then(() => {
      renderRepairs();
    });
  };

  return (
    <section className="section-container">
      <Card className="repair-card">
        <CardHeader>
          <div><strong>{camera[0]?.name}</strong></div>
        </CardHeader>
        <CardBody>
        <div>
          <img src={camera[0]?.photo} alt="" className="repair-img" />
        </div>
        <div>{repairObj.description}</div>
        </CardBody>
        <CardFooter>
        <div>
          <button
            className="btn-secondary"
            onClick={() => {
              navigate(`/repairs/${repairObj.id}`);
            }}
          >
            Edit
          </button>
          <button
            className="btn-warning"
            onClick={handleDelete}
            style={{ margin: 15 }}
          >
            Delete
          </button>
        </div>
        </CardFooter>
      </Card>
    </section>
  );
};
