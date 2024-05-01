import { useEffect, useState } from "react";
import { getAdds } from "./service";

function AdvertsPage() {
  const [adds, setAdd] = useState([]);

  useEffect(() => {
    getAdds().then((add) => setAdd(add));

    return;
  }, []);

  return (
    <div>
      <ul>
        {adds.map((add) => (
          <li key={add.id}>
            <div>{add.name}</div>
            <div>{add.sale}</div>
            <div>{add.price}</div>
            <div>{add.tags.join(", ")}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdvertsPage;
