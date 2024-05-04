import { useAuth } from "../pages/login/context";
import { logout } from "../pages/login/service";
import Button from "./Button";

export default function LogBotton({ className }) {
  const { onLogout } = useAuth();

  const handleClick = () => {
    logout();
    onLogout();
  };

  return (
    <Button $variant="main" $place={className} onClick={handleClick}>
      Logout
    </Button>
  );
}
