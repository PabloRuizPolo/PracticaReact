import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import AdvertsPage from "./pages/adverts/advertsPage";
import LoginPage from "./pages/login/loginPage";
import NewAdvert from "./pages/newAdvert/newAdvertPage";
import AdvertPage from "./pages/adverts/advertPage";
import RequiereAuth from "./utils/requiereAuth";
import Layout from "./components/Layout";
import { Suspense } from "react";

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/404"
          element={
            <Layout>
              <RequiereAuth>
                <div>404</div>
              </RequiereAuth>
            </Layout>
          }
        />
        <Route
          path="/adverts"
          element={
            <div>
              <Layout>
                <RequiereAuth>
                  <Outlet />
                </RequiereAuth>
              </Layout>
            </div>
          }
        >
          <Route index element={<AdvertsPage />} />
          <Route path="newAdd" element={<NewAdvert />} />
          <Route path=":id" element={<AdvertPage />} />
        </Route>

        <Route path="/" element={<Navigate to={"/adverts"} />} />
        <Route path="*" element={<Navigate to={"/404"} />} />
      </Routes>
    </Suspense>
  );
}

export default App;
