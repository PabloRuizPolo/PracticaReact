import { useState } from "react";
import { getAdds } from "./service";

function AdvertsPage() {
  const [adds, setAdd] = useState([]);

  getAdds().then((adds) => console.log(adds));

  return (
    <div>
      <ul>
        {adds.map((add) => (
          <li key={add.id}>{add.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdvertsPage;
