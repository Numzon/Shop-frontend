import { SignInRequest } from "../../../types";
import { signIn } from "../../requests";
import { useMutation } from "@tanstack/react-query";

export const useSignIn = () =>
  useMutation({
    mutationFn: async (model: SignInRequest) => {
      const { data } = await signIn(model);
      return data;
    },
  });

export default useSignIn;
