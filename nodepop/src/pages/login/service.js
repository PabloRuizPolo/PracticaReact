import { client, setAuthorization } from "../../api/client";

export const login = (credentials) => {
  return client
    .post("/api/auth/login", credentials)
    .then(({ accessToken }) => setAuthorization(accessToken));
};
