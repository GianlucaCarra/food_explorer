import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const env = import.meta.env.VITE_ENV;
const api = axios.create({
  baseURL: apiUrl,
  withCredentials: env === "development" ? false : true
});

export default api;