import { useMutation } from "@tanstack/react-query";
import { CreateSpecificationPatternRequest } from "../../../types";
import { addSpecificationPattern } from "../..";

export const useAddSpecificationPattern = () =>
  useMutation({
    mutationFn: async (model: CreateSpecificationPatternRequest) => {
      const { data } = await addSpecificationPattern(model);
      return data;
    },
  });

export default useAddSpecificationPattern;
