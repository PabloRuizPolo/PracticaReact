import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./header";

export default function Layout({ tittle, children }) {
  return (
    <div>
      <Header />
      <main>
        <Link to={"/adverts/newAdd"}>
          <button>Crear anuncio</button>
        </Link>
        <h2>{tittle}</h2>
        {children}
      </main>
      <Footer />
    </div>
  );
}
