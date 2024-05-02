import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import AdvertsPage from "./pages/adverts/advertsPage";
import { useAuth } from "./pages/login/context";
import LoginPage from "./pages/login/loginPage";
import NewAdvert from "./pages/newAdvert/newAdvertPage";
import AdvertPage from "./pages/adverts/advertPage";

function App() {
  const { isLogged } = useAuth();
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/adverts"
        element={
          <div>
            <p>Aqui irá mi layout</p>
            <Outlet />
          </div>
        }
      >
        <Route index element={<AdvertsPage />} />
        <Route path="newAdd" element={<NewAdvert />} />
        <Route path=":addId" element={<AdvertPage />} />
      </Route>
      <Route path="/404" element={<div>404</div>} />

      <Route path="/" element={<Navigate to={"/adverts"} />} />
      <Route path="*" element={<Navigate to={"/404"} />} />
    </Routes>
  );
}

export default App;
