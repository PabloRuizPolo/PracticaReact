import { useNavigate } from "react-router-dom";
import { deleteAdd } from "../service";
import Button from "../../../components/Button";
import { useDispatch } from "react-redux";
import { deleteAddRedux } from "../../../store/actions";

export default function DeleteAdd({ id }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteAddRedux(id));
  };

  return (
    <Button $variant="main" onClick={handleClick}>
      Borrar
    </Button>
  );
}
