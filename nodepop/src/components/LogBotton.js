import { useDispatch } from "react-redux";
import Button from "./Button";
import { auth_logout } from "../store/actions";
import { logout } from "../pages/login/service";

export default function LogBotton({ className }) {
  const dispatch = useDispatch();

  const handleClick = async () => {
    await logout();
    dispatch(auth_logout());
  };

  return (
    <Button $variant="main" $place={className} onClick={handleClick}>
      Logout
    </Button>
  );
}
