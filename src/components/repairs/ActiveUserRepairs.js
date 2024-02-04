import { useEffect, useReducer, useState } from "react";
import { deleteRepair, getAllRepairs } from "../../services/repairService";
import { getAllCameras } from "../../services/cameraService";
import { useNavigate } from "react-router-dom";
import { CustomerRepairs } from "./CustomerRepairs";

export const ActiveUserRepairs = ({ currentUser }) => {
  const [allRepairs, setAllRepairs] = useState([]);
  const [allCameras, setAllCameras] = useState([]);
  const [user, setUser] = useState([]);

  const userRepairs = allRepairs.filter((r) => r.userId == currentUser.id);

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
    <div className="tickets-container">

      <h2>My Repairs</h2>

      <article className="tickets">
        {userRepairs.map((repairObj) => {
          let camera = allCameras.filter((cam) => cam.id == repairObj.cameraId);
          return (
            <CustomerRepairs camera={camera} repairObj={repairObj} renderRepairs={renderRepairs}/>
          );
        })}
      </article>

    </div>
  );
};
