import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../pages/login/context";

export default function RequiereAuth({ children }) {
  const { isLogged } = useAuth();
  const location = useLocation();
  return isLogged ? (
    children
  ) : (
    <Navigate to={"/login"} state={{ from: location.pathname }} replace />
  );
}
