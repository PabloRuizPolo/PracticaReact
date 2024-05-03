import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAdd } from "./service";
import Add from "./components/add";
import Layout from "../../components/Layout";
import DeleteAdd from "./components/DeleteBotton";

export default function AdvertPage() {
  const [add, setAdd] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function getAddToRender() {
      const add = await getAdd(params.id);
      setAdd(add);
    }
    getAddToRender();
  }, [params.id]);

  return (
    <div>
      <Add {...add} />
      <DeleteAdd {...add} />
    </div>
  );
}
