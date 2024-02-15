import { useNavigate } from "react-router-dom";
import { Card, CardBody, CardFooter, CardTitle } from "reactstrap";
import "./Catalog.css";
import { deleteCamera } from "../../services/cameraService";

export const Cameras = ({ camera, currentUser, renderCameras }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/form/${camera.id}`);
  };

  const handleDelete = () => {
    deleteCamera(camera.id).then(() => {
      renderCameras();
    });
  };

  return !currentUser || !currentUser.staff ? (
    <Card className="horizontal-card">
      <CardBody className="horizontal-card-body">
        <img src={camera.photo} alt="" className="cameraImages" />
        <div className="horizontal-card-content">
          <CardTitle className="camera-title">
            <h2>{camera.name}</h2>
          </CardTitle>
          <span className="price">${camera.price}</span>
          <div style={{ padding: 10 }}>
            <button onClick={handleClick} className="btn-info">
              Send For Repair
            </button>
          </div>
        </div>
      </CardBody>
    </Card>
  ) : (
    <Card className="horizontal-card">
      <CardBody className="horizontal-card-body">
        <img src={camera.photo} alt="" className="cameraImages" />
        <div className="horizontal-card-content">
          <CardTitle className="camera-title">
            <h2>{camera.name}</h2>
          </CardTitle>
          <span className="price">${camera.price}</span>
          <div>
            <button
              className="btn-secondary"
              onClick={() => {
                navigate(`/catalog/${camera.id}`);
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
        </div>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};
