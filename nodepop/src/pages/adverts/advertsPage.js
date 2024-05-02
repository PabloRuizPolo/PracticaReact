import { useEffect, useState } from "react";
import { getAdds } from "./service";
import Add from "./components/add";
import { Link } from "react-router-dom";

function AdvertsPage() {
  const [adds, setAdd] = useState([]);

  useEffect(() => {
    getAdds().then((add) => setAdd(add));

    return;
  }, []);

  return (
    <div>
      <ul>
        {adds.map(({ id, ...add }) => (
          <li key={id}>
            <Link to={`/adverts/${id}`}>
              <Add {...add} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdvertsPage;
