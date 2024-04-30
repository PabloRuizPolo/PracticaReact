import axios from "axios";

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

client.interceptors.response.use((response) => response.data);
export const setAuthorization = (token) =>
  (client.defaults.headers.common["Authorization"] = `Bearer ${token}`);
export const removeAuthorization = () =>
  delete client.defaults.headers.common["Authorization"];
