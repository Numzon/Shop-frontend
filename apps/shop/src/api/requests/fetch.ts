import axios from "axios";
import { SessionStorage } from "../../constants/sessionStorage";

declare global {}

export const fetch = axios.create({
  baseURL: import.meta.env.VITE_APP_ENDPOINT_URL,
});

fetch.interceptors.request.use(async (config) => {
  const token = sessionStorage.getItem(SessionStorage.TOKEN);

  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    },
  };
});

fetch.interceptors.request.use(async (config) => {
  return {
    ...config,
  };
});

fetch.interceptors.response.use(undefined, (error) => {
  if (error.response?.status === 401) {
    window.location.pathname = "/signin";
  } else {
    throw error;
  }
});

export default fetch;
