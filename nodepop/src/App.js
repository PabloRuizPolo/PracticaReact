import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import AdvertsPage from "./pages/adverts/advertsPage";
import { useAuth } from "./pages/login/context";
import LoginPage from "./pages/login/loginPage";
import NewAdvert from "./pages/newAdvert/newAdvertPage";
import AdvertPage from "./pages/adverts/advertPage";
import RequiereAuth from "./utils/requiereAuth";

function App() {
  const { isLogged } = useAuth();
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/404"
        element={
          <RequiereAuth>
            <div>404</div>
          </RequiereAuth>
        }
      />

      <Route path="/" element={<Navigate to={"/adverts"} />} />
      <Route path="*" element={<Navigate to={"/404"} />} />

      <Route
        path="/adverts"
        element={
          <div>
            <p>Aqui irá mi layout</p>
            <RequiereAuth>
              <Outlet />
            </RequiereAuth>
          </div>
        }
      >
        <Route index element={<AdvertsPage />} />
        <Route path="newAdd" element={<NewAdvert />} />
        <Route path=":id" element={<AdvertPage />} />
      </Route>
    </Routes>
  );
}

export default App;
