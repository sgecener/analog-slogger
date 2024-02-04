import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/userService";
import { useNavigate } from "react-router-dom";

export const Repairs = ({ repair, currentUser }) => {
  
  const [employees, setEmployees] = useState([]);
  const [assignedEmployee, setAssignedEmployee] = useState({});
    
  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers().then((employeesArr) => {
      if (currentUser.staff === true) {
        setEmployees(employeesArr);
      }
    });
  }, [currentUser]);


  useEffect(() => {
    const foundEmployee = employees.find(
      (employee) => employee.id === repair.userId
    );
    setAssignedEmployee(foundEmployee);
  }, [employees, repair]);


  return (
    <section>
      <header>Order #{repair.id}</header>
      <div>{repair.camera?.name}</div>
      <div>{repair.description}</div>
      <footer>
        <div>
          <div>Technician:</div>
          <div>{assignedEmployee ? assignedEmployee.name : "none"}</div>
        </div>
        <div>
          <div>Rush Order?</div>
          <div>{repair.rush ? "Yes" : "No"}</div>
        </div>
        {/* <div className="btn-container">
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
        </div> */}
      </footer>
    </section>
  );
};
