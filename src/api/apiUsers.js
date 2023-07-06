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

const responseSuccessInterceptor = (response) => {
  const data = response.data;
  if (!data._meta.success) {
    return { error: data.result };
  }
  return { response: data };
};
const networkErrorInterceptor = (error) => {
  const responseError = error?.response?.data;
  return { error: responseError || error };
};
api.interceptors.request.use(checkTokenInterceptor);
api.interceptors.response.use(
  responseSuccessInterceptor,
  networkErrorInterceptor
);

export default api;
