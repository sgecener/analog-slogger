import { useEffect, useState } from "react";
import { NavBar } from "../components/nav/NavBar";
import { ActiveRepairs } from "../components/repairs/ActiveRepairs";
import { Route, Routes, Outlet } from "react-router-dom";
import { CameraCatalog } from "../components/cameras/CameraCatalog";
import { RepairForm } from "../components/repairs/RepairForm";
import { EditRepairForm } from "../components/repairs/EditRepairForm";
import { Welcome } from "../components/Welcome";
import logo from "../logo.png";
import "../App.css";
import { AddCamera } from "../components/cameras/add-camera/AddCamera";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localSloggerUser = localStorage.getItem("analog_user");
    const sloggerUserObj = JSON.parse(localSloggerUser);

    setCurrentUser(sloggerUserObj);
  }, []);

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "left", textAlign: "center" }}>
        <img className="img" src={logo} alt="logo" width={250} height={250} />
        <span className="font">
          <i>"Nurturing the Legacy, Preserving the Moments."</i>
        </span>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Outlet />
            </>
          }
        >
          <Route index element={<Welcome />} />
          <Route path="repairs">
            <Route
              index
              element={<ActiveRepairs currentUser={currentUser} />}
            />
            <Route
              path=":repairId"
              element={<EditRepairForm currentUser={currentUser} />}
            />
          </Route>
          <Route
            path="catalog"
            element={<CameraCatalog currentUser={currentUser} />}
          />
          <Route
            path="form/:cameraId"
            element={<RepairForm currentUser={currentUser} />}
          />
          <Route path="/new" element={<AddCamera />} />
        </Route>
      </Routes>
    </div>
  );
};
