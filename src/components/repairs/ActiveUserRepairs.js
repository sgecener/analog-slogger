import { useEffect, useState } from "react";
import { getAllRepairs } from "../../services/repairService";
import { getAllCameras } from "../../services/cameraService";
import { CustomerRepairs } from "./CustomerRepairs";

export const ActiveUserRepairs = ({ currentUser }) => {
  const [allRepairs, setAllRepairs] = useState([]);
  const [allCameras, setAllCameras] = useState([]);


  const userRepairs = allRepairs.filter((r) => r.userId === currentUser.id);

  const renderRepairs = () => {
    getAllRepairs().then((repairArr) => {
        setAllRepairs(repairArr);
      });
  }

  useEffect(() => {
    getAllRepairs().then((repairArr) => {
      setAllRepairs(repairArr);
    });
  }, []);

  useEffect(() => {
    getAllCameras().then((camArr) => {
      setAllCameras(camArr);
    });
  }, []);

  
  

  return (
    <div className="customer-cont">

      <h2>My Repairs</h2>

      <article className="repairs-container">
        {userRepairs.map((repairObj) => {
          let camera = allCameras.filter((cam) => cam.id === repairObj.cameraId);
          return (
            <CustomerRepairs  camera={camera} repairObj={repairObj} key={repairObj.id} renderRepairs={renderRepairs} className="repairs-card"/>
          );
        })}
      </article>

    </div>
  );
};
