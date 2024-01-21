import axios from "axios";
import { SessionStorage } from "../../constants/sessionStorage";
import { useRouter } from "../../routes/hooks";
import { Paths } from "../../constants";

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
  const router = useRouter();

  if (error.response?.status === 401) {
    router.push(Paths.SIGN_IN);
  } else {
    throw error;
  }
});

export default fetch;
