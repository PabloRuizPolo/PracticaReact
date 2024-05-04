import { useNavigate } from "react-router-dom";
import { deleteAdd } from "../service";
import Button from "../../../components/Button";

export default function DeleteAdd({ id }) {
  const go = useNavigate();

  const handleClick = async () => {
    await deleteAdd(id);
    go("/");
  };

  return (
    <Button $variant="main" onClick={handleClick}>
      Borrar
    </Button>
  );
}
