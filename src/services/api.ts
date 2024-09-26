import axios from "axios";

const api = axios.create({
  baseURL: "https://api.vististudi.online",
  withCredentials: true
});

export default api;