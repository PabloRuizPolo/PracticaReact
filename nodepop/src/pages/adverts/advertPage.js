import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Add from "./components/add";
import DeleteAdd from "./components/DeleteBotton";
import LoadingMessage from "../../components/LoadingMessage";
import ConfirmButton from "../../components/ConfirmButton";
import ConfirmLogic from "../../components/ConfirmLogic";
import { useDispatch, useSelector } from "react-redux";
import { getAddState } from "../../store/selectors";
import { addLoad } from "../../store/actions";

export default function AdvertPage() {
  const [confirm, setConfirm] = useState(false);
  const dispatch = useDispatch();

  const onclick = () => {
    setConfirm(true);
  };

  const { id } = useParams();
  const add = useSelector(getAddState(id));

  useEffect(() => {
    dispatch(addLoad(id));
  }, [id, dispatch]);

  return (
    <div>
      {confirm ? (
        <ConfirmLogic onAtrasClick={() => setConfirm(false)}>
          <DeleteAdd {...add} />
        </ConfirmLogic>
      ) : add ? (
        <div>
          <Add location="advertPage" {...add} />
          <ConfirmButton onclick={onclick}>
            <p>Borrar</p>
          </ConfirmButton>
        </div>
      ) : (
        <LoadingMessage>
          <p>Cargando detalles del anuncio</p>
        </LoadingMessage>
      )}
    </div>
  );
}
