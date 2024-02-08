import { Authorized } from "../../views/Authorized";
import { ActiveAdminRepairs } from "./ActiveAdminRepairs";
import { ActiveUserRepairs } from "./ActiveUserRepairs";
import "./ActiveRepairs.css";

export const ActiveRepairs = ({ currentUser }) => {
  return !currentUser ? (
    <>
      <div className="login-msg">Please login to access your repair list!</div>
      <div className="login-msg">
        <i>-AnalogSlogger Team</i>
      </div>
    </>
  ) : (
    <Authorized>
      {currentUser.staff ? (
        <>
          <ActiveAdminRepairs currentUser={currentUser} />
        </>
      ) : (
        <ActiveUserRepairs currentUser={currentUser} />
      )}
    </Authorized>
  );
};
