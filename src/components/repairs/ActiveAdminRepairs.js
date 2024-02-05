import { useEffect, useState } from "react";
import { getAllRepairs } from "../../services/repairService";
import { Repairs } from "./Repairs";

export const ActiveAdminRepairs = ({ currentUser }) => {
  const [allRepairs, setAllRepairs] = useState([]);
  const [showRush, setShowRush] = useState(false);
  const [filteredRepairs, setFilteredRepairs] = useState([]);

  const getAndSetRepairs = () => {
    getAllRepairs().then((repairsArr) => {
      setAllRepairs(repairsArr);
    });
  };

  useEffect(() => {
    getAndSetRepairs();
  }, [currentUser]);

  useEffect(() => {
    if (showRush) {
      const rushOrders = allRepairs.filter((repair) => repair.rush === true);
      setFilteredRepairs(rushOrders);
    } else {
      setFilteredRepairs(allRepairs);
    }
  }, [showRush, allRepairs]);

  return (
    <div className="tickets-container">
      <h2>Repairs</h2>

      <article className="tickets">
        {filteredRepairs.map((repairObj) => {
          return (
            <Repairs
              setShowRush={setShowRush}
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
