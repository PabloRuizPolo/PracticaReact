import { client } from "../../api/client";

const apiUrl = "api/v1/adverts";

export const getAdds = () => {
  return client.get(apiUrl);
};