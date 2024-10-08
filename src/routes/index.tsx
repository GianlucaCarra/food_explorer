import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import USER_ROLE from "../utils/roles";
import AuthRoutes from "./auth.routes";
import AdminRoutes from "./admin.routes";
import UserRoutes from "./user.routes";

function Routes() {
  const { role, user } = useAuth();
  const AcessRoute = () => {
    switch(role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;
      case USER_ROLE.USER:
        return <UserRoutes />;
      default: 
        return <UserRoutes />;
    }
  }

  return(
    <BrowserRouter> 
      { !user && !role ? <AuthRoutes /> : <AcessRoute /> }
    </BrowserRouter>
  );
}

export default Routes;