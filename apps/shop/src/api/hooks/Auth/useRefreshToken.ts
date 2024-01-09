import { useMutation } from "@tanstack/react-query";
import { RefreshTokenRequest } from "../../../types";
import { refreshToken } from "../../requests/auth";

export const useRefreshToken = () =>
  useMutation({
    mutationFn: async (model: RefreshTokenRequest) => {
      const { data } = await refreshToken(model);
      return data;
    },
  });

export default useRefreshToken;
