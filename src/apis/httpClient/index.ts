import axios, { AxiosInstance } from "axios";
import { refresh } from "../token";

const instance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

// instance.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     if (error.response) {
//       const { status } = error.response;
//       const { config } = error;
//       if (status === 419 && !config.sent) {
//         config.sent = true;
//         await refresh();
//         instance(config);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export default instance;
