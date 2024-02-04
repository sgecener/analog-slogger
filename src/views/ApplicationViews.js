import { useEffect, useState } from "react";
import { NavBar } from "../components/nav/NavBar";
import { ActiveRepairs } from "../components/repairs/ActiveRepairs";
import { Route, Routes, Outlet } from "react-router-dom"
import { CameraCatalog } from "../components/cameras/CameraCatalog";
import { RepairForm } from "../components/repairs/RepairForm";



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
      />
        <Route path="repairs">
          <Route index element={<ActiveRepairs currentUser={ currentUser }/>} />

        </Route>
        <Route path="catalog" element={<CameraCatalog   currentUser={currentUser}/>} />
        <Route path="form" element={<RepairForm  currentUser={currentUser}/>}/>
        
    </Routes>
  )
};
