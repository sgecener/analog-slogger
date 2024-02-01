import { useEffect, useState } from "react";
import { getAllRepairs } from "../../services/repairService";
import { Repairs } from "./Repairs";
import { Route } from "react-router-dom";
import { NavBar } from "../nav/NavBar";

export const ActiveAdminRepairs = ({ currentUser }) => {
  const [allRepairs, setAllRepairs] = useState([]);
  const [filteredRepairs, setFilteredRepairs] = useState([]);

  const getAndSetRepairs = () => {
    getAllRepairs().then((repairsArr) => {
      if (currentUser.staff === true) {
        setAllRepairs(repairsArr);
      } else {
        const customerRepairs = repairsArr.filter(
          (repair) => repair.userId === currentUser.id
        );
        setAllRepairs(customerRepairs);
      }
    });
  };

  useEffect(() => {
    getAndSetRepairs();
  }, [currentUser]);

 

  return (

    <div className="tickets-container">
      <h2>Repairs</h2>

      <article className="tickets">
        {filteredRepairs.map((repairObj) => {
          return (
            <Repairs
              setFilteredRepairs={setFilteredRepairs}
              repair={repairObj}
              key={repairObj.id}
              currentUser={currentUser}
              getAndSetRepairs={getAndSetRepairs}
            />
          );
        })}
      </article>
    </div>
  );
};
