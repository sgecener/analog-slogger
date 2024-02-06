import { useEffect, useState } from "react";
import { editRepair } from "../../services/repairService";

export const Repairs = ({ repair, currentUser, staffMembers, getAndSetRepairs }) => {
  
  const [filterStaff , setFilterStaff] = useState(null)

  

  useEffect(() => {
    const technician = staffMembers.find((s) =>{ 
        return  repair.staffId === s.id;
      });
      setFilterStaff(technician)

  }, [staffMembers, repair])

  

  const handleCompleted = () => {
    const completedRepair = {
      id: repair.id,
      userId: repair.userId,
      staffId: currentUser.id,
      cameraId: repair.cameraId,
      description: repair.description,
      rush: repair.rush,
      completed: true,
    };

    editRepair(completedRepair).then(() => {
      getAndSetRepairs();
    });
  };

  return (
    <section style={{ margin: 30 }}>
      <header>Order #{repair.id}</header>
      <div>{repair.camera?.name}</div>
      <div>{repair.description}</div>
      <footer>
        <div>
          <div>Rush Order?</div>
          <div>{repair.rush ? "Yes" : "No"}</div>
        </div>
      </footer>
      <div>
        {!repair.completed ? (
          <button className="btn-primary" onClick={handleCompleted}>
            Completed
          </button>
        ) : (
          <div>
            <div>
              Status: <strong>Completed</strong>
            </div>
            <div>Technician: {filterStaff ? filterStaff.name : ""}</div>
          </div>
        )}
      </div>
    </section>
  );
};
