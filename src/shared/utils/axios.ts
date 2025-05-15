import { notification } from "antd";
import axios, { AxiosError } from "axios";
import { getCookie } from "cookies-next";
import { useAuthStore } from "../../entities/user/model/useAuthStore";

export const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const request = axios.create({
  baseURL,
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
  (response) => {
    console.log("axios response", response);
    return response.data;
  },
  async (error: AxiosError) => {
    const data: any = error?.response?.data;
    console.log("axios error", error, error?.status);
    if (error?.status === 401) {
      notification.error({
        message: "Session expired",
        description: "Please login again",
        icon: "⌛",
      });
      localStorage.removeItem("access_token");
      useAuthStore.setState({ user: null });
      window.location.href = "/auth/login";
    }

    if (error.status === 500) {
      notification.error({ message: "Server error" });
    } else if (data?.message) {
      notification?.error({
        message: data?.message,
        description: data?.cause,
        icon: "❌",
      });
    } else {
      notification.error({
        message:
          error?.message || "Something went wrong, please try again later ",
        icon: "❌",
      });
    }
    return Promise.reject(error);
  },
);

export default request;
