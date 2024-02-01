import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/userService";
import { deleteRepair, editRepair } from "../../services/repairService";
import { useNavigate } from "react-router-dom";

export const Repairs = ({ repair, currentUser, getAndSetRepairs }) => {
  
  const [employees, setEmployees] = useState([]);
  const [assignedEmployee, setAssignedEmployee] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers().then((employeesArr) => {
      if (currentUser.staff === true) {
        setEmployees(employeesArr);
      }
    });
  }, []);


  useEffect(() => {
    const foundEmployee = employees.find(
      (employee) => employee.id === repair.userId
    );
    setAssignedEmployee(foundEmployee);
  }, [employees, repair]);

  const handleClose = () => {
    const closedRepair = {
      id: repair.id,
      userId: repair.userId,
      description: repair.description,
      rush: repair.rush,
      completed: !repair.completed,
    };

    editRepair(closedRepair).then(() => {
      getAndSetRepairs();
    });
  };

  const handleDelete = () => {
    deleteRepair(repair.id).then(() => {
      getAndSetRepairs();
    });
  };

  return (
    <section>
      <header>#{repair.id}</header>
      <div>{repair.camera?.name}</div>
      <div>{repair.description}</div>
      <footer>
        <div>
          <div>Technician: </div>
          <div>{assignedEmployee ? assignedEmployee.name : "none"}</div>
        </div>
        <div>
          <div>Rush Order?</div>
          <div>{repair.rush ? "Yes" : "No"}</div>
        </div>
        <div className="btn-container">
          {assignedEmployee?.userId === currentUser.id && !repair.completed ? (
            <button className="btn-warning" onClick={handleClose}>
              Close
            </button>
          ) : (
            ""
          )}
          {!currentUser.staff && (
            <button className="btn btn-warning" onClick={handleDelete}>
              Delete
            </button>
          )}
          {!currentUser.staff && (
            <button
              className="btn btn-secondary"
            //   onClick={() => {
            //     navigate(`/tickets/edit/${ticket.id}`);
            //   }}
            >
              Edit
            </button>
          )}
        </div>
      </footer>
    </section>
  );
};
