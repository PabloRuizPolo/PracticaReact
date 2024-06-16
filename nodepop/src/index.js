import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import storage from "./utils/storage";
import { setAuthorization } from "./api/client";
import { AuthContextProvider } from "./pages/login/context";
import { BrowserRouter } from "react-router-dom";

import configureStore from "./store";

const accessToken = storage.get("auth");
if (accessToken) {
  setAuthorization(accessToken);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider isAlreadyLogged={!!accessToken}>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
