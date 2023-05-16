import Axios from "axios";
// import { toast } from "react-toastify";

const baseURL = process.env.REACT_APP_API_URL;

let headers = {} as any;

const axios = Axios.create({
  baseURL: baseURL,
  headers: { ...headers, 'Content-Type': 'application/json' },
});

const refreshTokenFn = async () => {
  try {

    const response = await axios.post("/accounts/jwt/api/token/refresh/", {
    });

    if (response.data?.access) {
      return response.data;
    }
  } catch (error) {
  }
};

axios.interceptors.request.use(async (config: any) => {
  const authRoutes = ["get_otp_front_end_user", "login_front_end_user"];
  const isAuthRoute = authRoutes.includes(config.url.split("/")?.[3]);
//   if (token && !isAuthRoute) {
//     return { ...config, headers: { ...config.headers, "Authorization": `Bearer ${token}` } }
//   }
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use((response: any) => {
  return response;
}, async function (error) {
  const originalConfig = error.config;
  if (error?.response?.data?.code === "token_not_valid" && !originalConfig._retry) {
    originalConfig._retry = true;
    const data = await refreshTokenFn();
    if (data?.access) {
      axios.defaults.headers.common["x-access-token"] = data.access;
      return axios(originalConfig)
    }
  }
  return Promise.reject(error);
});

export default axios;