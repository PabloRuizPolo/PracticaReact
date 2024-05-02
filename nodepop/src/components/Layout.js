import Footer from "./Footer";
import Header from "./header";

export default function Layout({ tittle, children }) {
  return (
    <div>
      <Header />
      <main>
        <h2>{tittle}</h2>
        {children}
      </main>
      <Footer />
    </div>
  );
}
