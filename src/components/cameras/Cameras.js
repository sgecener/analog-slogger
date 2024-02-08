import { useNavigate } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";
import "./Catalog.css";

export const Cameras = ({ camera }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/form/${camera.id}`);
  };

  return (
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
  );
};
