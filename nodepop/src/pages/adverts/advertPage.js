import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getAdd } from "./service";
import Add from "./components/add";
import DeleteAdd from "./components/DeleteBotton";
import LoadingMessage from "../../components/LoadingMessage";
import ConfirmButton from "../../components/ConfirmButton";
import ConfirmLogic from "../../components/ConfirmLogic";

export default function AdvertPage() {
  const [add, setAdd] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const params = useParams();
  const go = useNavigate();

  const onclick = () => {
    setConfirm(true);
  };

  useEffect(() => {
    async function getAddToRender() {
      try {
        const add = await getAdd(params.id);
        setAdd(add);
      } catch (error) {
        if (error.status === 404) {
          go("/404");
        }
      }
    }

    getAddToRender();
  }, [params.id, go]);

  return (
    <div>
      {confirm ? (
        <ConfirmLogic onAtrasClick={() => setConfirm(false)}>
          <DeleteAdd {...add} />
        </ConfirmLogic>
      ) : add ? (
        <div>
          <Add {...add} />
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
