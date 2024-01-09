import { signUp } from "../../requests";
import { useMutation } from "@tanstack/react-query";
import { SignUpRequest } from "../../../types";

export const useSignUp = () =>
  useMutation({
    mutationFn: async (model: SignUpRequest) => {
      const { data } = await signUp(model);
      return data;
    },
  });

export default useSignUp;
