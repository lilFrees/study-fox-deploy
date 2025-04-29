import { notification } from "antd";
import axios, { AxiosError } from "axios";
import { getCookie } from "cookies-next";

export const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const request = axios.create({
  baseURL,
  withCredentials: true,
});

request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");

    if (token !== null) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    const cookie = getCookie("csrftoken", { domain: baseURL });

    const language = getCookie("locale");
    config.headers["Accept-Language"] = language || "uz";

    if (cookie !== null) {
      config.headers["X-CSRFToken"] = cookie;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (response) => response.data,
  async (error: AxiosError) => {
    if (error.config?.method !== "get") {
      console.error("Server returned the error below: ", error);
      if (error.status === 500) {
        notification.error({ message: "Server error" });
      } else if (typeof error?.response?.data === "object") {
        Object.keys(error?.response?.data as any).forEach((key) => {
          notification.error({
            message: (error?.response?.data as any)?.[key],
          });
        });
      }
    }
    return Promise.reject(error);
  },
);

export default request;
