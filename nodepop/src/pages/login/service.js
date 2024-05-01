import {
  client,
  removeAuthorization,
  setAuthorization,
} from "../../api/client";
import storage from "../../utils/storage";

export const login = (credentials) => {
  return client.post("/api/auth/login", credentials).then(({ accessToken }) => {
    setAuthorization(accessToken);
    storage.set("auth", accessToken);
  });
};

export const logout = () => {
  removeAuthorization();
  storage.remove("auth");
};
