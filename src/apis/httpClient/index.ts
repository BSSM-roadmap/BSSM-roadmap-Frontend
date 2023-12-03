import axios, { AxiosInstance } from "axios";
import { refresh } from "../token";
import { ERROR } from "../constants";

const instance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.data.code === ERROR.CODE.TOKEN_403_2) {
      const newToken = await refresh();
      originalRequest.headers.Authorization = newToken;
      return instance(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default instance;
