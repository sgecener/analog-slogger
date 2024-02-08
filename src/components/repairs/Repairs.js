import { useEffect, useState } from "react";
import { editRepair } from "../../services/repairService";
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";
import "./ActiveRepairs.css"

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
    <section className="section-container">
    <Card className="repair-card">
      <CardHeader><strong>Order #{repair.id}</strong></CardHeader>
      <CardBody>
        <div style={{fontSize: 17, paddingBottom: "1rem"}}>{repair.user?.name}</div>
        <div>{repair.camera?.name}</div>
        <img className="repair-img"src={repair.camera?.photo} alt="Camera" />
        <div>Description: {repair.description}</div>
      </CardBody>
      <CardFooter>
        <div>
          <div>Rush Order? {repair.rush ? "Yes" : "No"}</div>
          
        </div>
        {!repair.completed ? (
          <button className="btn btn-primary" onClick={handleCompleted}>
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
      </CardFooter>
    </Card>
  </section>
);
};
 
