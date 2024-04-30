import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ isAlreadyLogged, children }) => {
  const [isLogged, setIsLogged] = useState(isAlreadyLogged);
  const changeToLogin = () => setIsLogged(true);
  const changeToLogout = () => setIsLogged(false);

  const authContextValue = {
    isLogged,
    onLogin: changeToLogin,
    onLogput: changeToLogout,
  };
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authValue = useContext(AuthContext);
  return authValue;
};
