import { client } from "../../api/client";

const apiUrl = "api/v1/adverts";

export const getAdds = () => {
  return client.get(apiUrl);
};

export const postAdds = (add) => {
  return client.post(apiUrl, add);
};

export const getAdd = (id) => {
  const url = `${apiUrl}/${id}`;
  return client.get(url);
};

export const deleteAdd = (id) => {
  const url = `${apiUrl}/${id}`;
  return client.delete(url);
};
