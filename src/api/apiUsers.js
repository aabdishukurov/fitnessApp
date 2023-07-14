import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "https://fitbreak.geeks.kg/api/v1",
});

const checkTokenInterceptor = (config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

const networkErrorInterceptor = (error) => {
  console.error(error);
};
api.interceptors.request.use(checkTokenInterceptor);
api.interceptors.response.use(networkErrorInterceptor);

export default api;
