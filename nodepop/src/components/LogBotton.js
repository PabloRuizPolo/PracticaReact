import { Link } from "react-router-dom";
import { useAuth } from "../pages/login/context";
import { logout } from "../pages/login/service";

export default function LogBotton() {
  const { onLogout } = useAuth();

  const handleClick = () => {
    logout();
    onLogout();
  };

  return <button onClick={handleClick}>Logout</button>;
}
