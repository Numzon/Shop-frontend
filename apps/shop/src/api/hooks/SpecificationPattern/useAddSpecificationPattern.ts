import { useMutation } from "@tanstack/react-query";
import { CreateSpecificationPatternRequest } from "../../../types";
import { addSpecificationPattern } from "../../requests/specificationPattern";

export const useAddSpecificationPattern = () =>
  useMutation({
    mutationFn: async (model: CreateSpecificationPatternRequest) => {
      console.log(model);
      const { data } = await addSpecificationPattern(model);
      return data;
    },
  });

export default useAddSpecificationPattern;
