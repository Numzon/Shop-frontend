import { useMutation } from "@tanstack/react-query";
import { EditSpecificationPatternRequest } from "../../../types";
import { editSpecificationPattern } from "../..";

export const useEditSpecificationPattern = () =>
  useMutation({
    mutationFn: async (model: EditSpecificationPatternRequest) => {
      const { status } = await editSpecificationPattern(model);
      return status;
    },
  });

export default useEditSpecificationPattern;
