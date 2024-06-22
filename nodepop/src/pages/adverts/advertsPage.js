import { useEffect, useState } from "react";
import Add from "./components/add";
import { Link } from "react-router-dom";
import NewAdvert from "../newAdvert/newAdvertPage";
import LoadingMessage from "../../components/LoadingMessage";
import "./advertsPage.css";
import { useDispatch, useSelector } from "react-redux";
import { addsLoad } from "../../store/actions";
import { getAddsState, getUi } from "../../store/selectors";

function AdvertsPage() {
  const [filteredAdds, setFilteredAdds] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterSale, setFilterSale] = useState(null);

  const dispatch = useDispatch();
  const adds = useSelector(getAddsState);

  const { pending: isLoading } = useSelector(getUi);

  useEffect(() => {
    dispatch(addsLoad());
    applyFilters();
  }, [dispatch, adds, filterName, filterSale]);

  const handleTextFilterChange = (event) => {
    setFilterName(event.target.value.toLowerCase());
  };

  const handleSaleFilterChange = (event) => {
    if (event.target.value === "venta") {
      setFilterSale(true);
    } else if (event.target.value === "compra") {
      setFilterSale(false);
    } else if (event.target.value === "todos") {
      setFilterSale(null);
    }
  };

  const applyFilters = () => {
    if (!adds) {
      return;
    }
    const filtered = adds.filter((add) => {
      const nameMatch = add.name.toLowerCase().includes(filterName);
      const saleMatch = filterSale === null || filterSale === add.sale;
      return nameMatch && saleMatch;
    });
    setFilteredAdds(filtered);
  };

  return (
    <div>
      <div className="filtros-contenedor">
        <input
          type="text"
          placeholder="Buscar anuncio..."
          label="Buscar"
          value={filterName}
          onChange={handleTextFilterChange}
        />
        <select value={filterSale} onChange={handleSaleFilterChange}>
          <option value="todos">Todos</option>
          <option value="venta">Venta</option>
          <option value="compra">Compra</option>
        </select>
      </div>
      {isLoading ? (
        <LoadingMessage>
          <p>Cargando Anuncios</p>
        </LoadingMessage>
      ) : !adds.length ? (
        <NewAdvert />
      ) : filteredAdds.length ? (
        <ul className="adsContainer">
          {filteredAdds.map(({ id, ...add }) => (
            <li key={id}>
              <Link to={`/adverts/${id}`}>
                <Add location="advertsPage" {...add} />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron anuncios que coincidan con los filtros.</p>
      )}
    </div>
  );
}

export default AdvertsPage;
