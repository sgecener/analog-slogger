import { useEffect, useState } from "react";
import { getAllRepairs } from "../../services/repairService";
import { Repairs } from "./Repairs";
import { getUserbyStaff } from "../../services/userService";

export const ActiveAdminRepairs = ({ currentUser }) => {
  const [allRepairs, setAllRepairs] = useState([]);
  const [staffMembers, setStaffMembers] = useState([]);

  

  useEffect(() => {
    getUserbyStaff().then((data) => {
      setStaffMembers(data);
    });
  }, [currentUser]);

  const getAndSetRepairs = () => {
    getAllRepairs().then((repairsArr) => {
      setAllRepairs(repairsArr);
    });
  };

  useEffect(() => {
    getAndSetRepairs();
  }, [currentUser]);

  return (
    <div className="tickets-container">
      <h2 style={{ margin: 30 }}>Repairs</h2>

      <article className="tickets">
        {allRepairs.map((repairObj) => {
          return (
            <Repairs
              staffMembers={staffMembers}
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
