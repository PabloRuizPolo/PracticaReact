import { useEffect, useState } from "react";
import { getAdds } from "./service";
import Add from "./components/add";

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
            <Add {...add} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdvertsPage;
