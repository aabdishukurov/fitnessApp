import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
<<<<<<< HEAD
  baseURL: "https://fitbreak.geeks.kg/api/v1",
=======
  baseURL: "https://api.escuelajs.co/api/v1/",
>>>>>>> 3caee9ff2f8d771088b0a3ffe94f015de3fdd5aa
});

const checkTokenInterceptor = (config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

<<<<<<< HEAD
const networkErrorInterceptor = (error) => {
  console.error(error);
};
api.interceptors.request.use(checkTokenInterceptor);
api.interceptors.response.use(networkErrorInterceptor);

export default api;
=======
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
>>>>>>> 3caee9ff2f8d771088b0a3ffe94f015de3fdd5aa
