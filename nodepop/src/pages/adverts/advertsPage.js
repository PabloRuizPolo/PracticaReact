import { useEffect, useState } from "react";
import { getAdds } from "./service";
import Add from "./components/add";
import { Link } from "react-router-dom";
import NewAdvert from "../newAdvert/newAdvertPage";

function AdvertsPage() {
  const [adds, setAdd] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAdds().then((add) => {
      setAdd(add);
      setIsLoading(false);
    });

    return;
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Cargando anuncios</p>
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
