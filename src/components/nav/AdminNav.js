import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

export const AdminNav = () => {
  const navigate = useNavigate()
  
  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/catalog">Repair Catalog</Link>
      </li>
      <li className="navbar-item">
        <Link to="/c">Active Repairs</Link>
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
        ""
      )}
    </ul>
  );
};
