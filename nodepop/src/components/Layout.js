import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./header";
import Button from "./Button";

export default function Layout({ tittle, children }) {
  return (
    <div className="body">
      <Header />
      <main style={{ padding: "5px" }}>
        <Link to={"/adverts/newAdd"}>
          <Button type="submit" $variant="main">
            Crear anuncio
          </Button>
        </Link>
        <h2>{tittle}</h2>
        {children}
      </main>
      <Footer />
    </div>
  );
}
