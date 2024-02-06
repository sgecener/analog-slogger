import { useEffect, useState } from "react";
import { NavBar } from "../components/nav/NavBar";
import { ActiveRepairs } from "../components/repairs/ActiveRepairs";
import { Route, Routes, Outlet } from "react-router-dom";
import { CameraCatalog } from "../components/cameras/CameraCatalog";
import { RepairForm } from "../components/repairs/RepairForm";
import { EditRepairForm } from "../components/repairs/EditRepairForm";
import { Welcome } from "../components/Welcome";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localSloggerUser = localStorage.getItem("analog_user");
    const sloggerUserObj = JSON.parse(localSloggerUser);

    setCurrentUser(sloggerUserObj);
  }, []);

  return (
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
          <Route index element={<ActiveRepairs currentUser={currentUser} />} />
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
      </Route>
    </Routes>
  );
};
