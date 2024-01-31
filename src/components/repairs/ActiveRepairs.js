import { Authorized } from "../../views/Authorized";
import { ActiveAdminRepairs } from "./ActiveAdminRepairs";
import { ActiveUserRepairs } from "./ActiveUserRepairs";

export const ActiveRepairs = ({ currentUser }) => {
  return ( !currentUser ? <>Please login to access your repair list! </> :
    <Authorized>
      {currentUser.staff ? <ActiveAdminRepairs /> : <ActiveUserRepairs />}
    </Authorized>
  );
};
