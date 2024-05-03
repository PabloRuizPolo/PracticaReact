import { useEffect, useState } from "react";
import { getAdds } from "./service";
import Add from "./components/add";
import { Link } from "react-router-dom";
import NewAdvert from "../newAdvert/newAdvertPage";
import LoadingMessage from "../../components/LoadingMessage";

function AdvertsPage() {
  const [adds, setAdds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAdds().then((add) => {
      setAdds(add);
      setIsLoading(false);
    });

    return;
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingMessage>
          <p>Cargando Anuncios</p>
        </LoadingMessage>
      ) : adds.length ? (
        <ul>
          {adds.map(({ id, ...add }) => (
            <li key={id}>
              <Link to={`/adverts/${id}`}>
                <Add {...add} />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <NewAdvert />
      )}
    </div>
  );
}

export default AdvertsPage;
