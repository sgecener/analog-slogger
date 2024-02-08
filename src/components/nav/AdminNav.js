import { Link, useNavigate } from "react-router-dom";


export const AdminNav = () => {

    const navigate = useNavigate();

    return (
      <div className="navbar-container">
        <ul className="navbar">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/catalog">Repair Catalog</Link>
          </li>
          <li className="navbar-item">
            <Link to="/repairs">Active Repairs</Link>
          </li>
          <li className="navbar-item">
            <Link to="/addCamera">Add New Camera</Link>
          </li>          
  
          {localStorage.getItem("analog_user") ? (
            <li className="navbar-item navbar-logout">
              <Link
                className="navbar-link"
                to=""
                onClick={() => {
                  localStorage.removeItem("analog_user");
                  navigate("/", { replace: true });
                }}
              >
                Logout
              </Link>
            </li>
          ) : (
            <li className="navbar-item navbar-logout">
              <Link className="navbar-link" to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    );
  };
