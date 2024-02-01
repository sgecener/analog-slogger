import { useEffect, useState } from "react";
import { getAllCameras } from "../../services/cameraService";

export const CameraCatalog = () => {
  const [cameras, setCameras] = useState([]);

  useEffect(() => {
    getAllCameras().then((camerasArr) => {
      setCameras(camerasArr);
    });
  }, []);

  return (
    <section>
      <div>{cameras.map((cam) => <div> {cam.name} </div>)}</div>
    </section>
  );
};
