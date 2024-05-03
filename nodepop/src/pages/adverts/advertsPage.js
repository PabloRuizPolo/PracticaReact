import { useEffect, useState } from "react";
import { getAdds } from "./service";
import Add from "./components/add";
import { Link } from "react-router-dom";
import NewAdvert from "../newAdvert/newAdvertPage";
import Layout from "../../components/Layout";

function AdvertsPage() {
  const [adds, setAdd] = useState([]);

  useEffect(() => {
    getAdds().then((add) => setAdd(add));

    return;
  }, []);

  return (
    <div>
      {adds.length ? (
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
