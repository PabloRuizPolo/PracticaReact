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
          <li key={add.id}>{add.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdvertsPage;
