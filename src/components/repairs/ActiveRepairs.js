import { Authorized } from "../../views/Authorized";
import { ActiveAdminRepairs } from "./ActiveAdminRepairs";
import { ActiveUserRepairs } from "./ActiveUserRepairs";

export const ActiveRepairs = ({ currentUser }) => {
  return !currentUser ? (
    <>
      <div>Please login to access your repair list!</div>{" "}
    </>
  ) : (
    <Authorized>
      {currentUser.staff ? (
        <ActiveAdminRepairs currentUser={currentUser} />
      ) : (
        <ActiveUserRepairs currentUser={currentUser} />
      )}
    </Authorized>
  );
};
