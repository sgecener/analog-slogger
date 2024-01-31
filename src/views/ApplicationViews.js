import { useEffect, useState } from "react";
import { NavBar } from "../components/nav/NavBar";
import { ActiveRepairs } from "../components/repairs/ActiveRepairs";
import { Route, Routes, Outlet } from "react-router-dom"


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
        <Route path="repairs" element={<ActiveRepairs currentUser={ currentUser }/>} />
        <Route path="catalog"  />
        
    </Routes>
  )
};
