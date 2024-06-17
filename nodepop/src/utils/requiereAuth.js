import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLogged } from "../store/selectors";

export default function RequiereAuth({ children }) {
  const isLogged = useSelector(getIsLogged);
  const location = useLocation();
  return isLogged ? (
    children
  ) : (
    <Navigate to={"/login"} state={{ from: location.pathname }} replace />
  );
}
