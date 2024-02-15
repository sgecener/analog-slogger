import { useEffect, useState } from "react";
import { getAllRepairs } from "../../services/repairService";
import { Repairs } from "./Repairs";
import { getUserbyStaff } from "../../services/userService";
import "./ActiveRepairs.css"

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
    <div>
      <h2 style={{ margin: 30, textAlign: "center", fontSize: 40}}>Repairs</h2>

      <article className="repairs-container">
        {allRepairs.map((repairObj) => {
          return (
            <Repairs 
              staffMembers={staffMembers}
              repair={repairObj}
              key={repairObj.id}
              currentUser={currentUser}
              getAndSetRepairs={getAndSetRepairs}
              className="repairs-card"
            />
          );
        })}
      </article>
    </div>
  );
};
