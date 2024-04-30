import AdvertsPage from "./pages/adverts/advertsPage";
import { useAuth } from "./pages/login/context";
import LoginPage from "./pages/login/loginPage";

function App() {
  const { isLogged } = useAuth();
  return <div>{isLogged ? <AdvertsPage /> : <LoginPage />}</div>;
}

export default App;
