import { useNavigate } from "react-router-dom";
import { deleteAdd } from "../service";
import Button from "../../../components/Button";
import { useDispatch } from "react-redux";
import { deleteAddRedux } from "../../../store/actions";

export default function DeleteAdd({ id }) {
  const go = useNavigate();
  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(deleteAddRedux(id));
    go("/");
  };

  return (
    <Button $variant="main" onClick={handleClick}>
      Borrar
    </Button>
  );
}
