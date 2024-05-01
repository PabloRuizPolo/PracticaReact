import AdvertsPage from "./pages/adverts/advertsPage";
import { useAuth } from "./pages/login/context";
import LoginPage from "./pages/login/loginPage";
import NewAdvert from "./pages/newAdvert/newAdvertPage";

function App() {
  const { isLogged } = useAuth();
  return (
    <div>{isLogged ? <AdvertsPage /> /*<NewAdvert />*/ : <LoginPage />}</div>
  );
}

export default App;
