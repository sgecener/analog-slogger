import { useEffect, useState } from "react";
import { getAllCameras } from "../../services/cameraService";
import { TypeFilter } from "./CameraTypeFilter";
import { Cameras } from "./Cameras";
import { Col, Container } from "reactstrap";
import "./Catalog.css";
import { useNavigate } from "react-router-dom";

export const CameraCatalog = ({currentUser}) => {
  const [cameras, setCameras] = useState([]);
  const [filteredCameras, setFilteredCameras] = useState([]);
  const [typeSelect, setTypeSelect] = useState("All");
  // unique types
  const types = [...new Set(cameras.map((camera) => camera.type))];

  const navigate = useNavigate()

  const renderCameras = () => {
    getAllCameras().then((camerasArr) => {
      setCameras(camerasArr);
    });
  };

  useEffect(() => {
    renderCameras();
  }, []);

  useEffect(() => {
    if (typeSelect !== "All") {
      const filteredCameras = cameras.filter(
        (camera) => camera.type === typeSelect
      );
      setFilteredCameras(filteredCameras);
    } else {
      setFilteredCameras(cameras);
    }
  }, [typeSelect, cameras]);

  return (
    <Container style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <Col>
      <h2 style={{ fontSize: 40 }}>OUR CATALOG</h2>
      <TypeFilter setTypeSelect={setTypeSelect} types={types} style={{ alignSelf: "center" }} />
    </Col>
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}>
      {filteredCameras.map((cameraObj) => {
        return (
          <Cameras
            camera={cameraObj}
            key={cameraObj.id}
            renderCameras={renderCameras}
            
          />
        );
      })}
    </div>
    <div>
        {!currentUser || !currentUser.staff  ? "" : <button onClick={() => navigate("/new")}>Add New Camera</button>}
    </div>
  </Container>
  );
};
