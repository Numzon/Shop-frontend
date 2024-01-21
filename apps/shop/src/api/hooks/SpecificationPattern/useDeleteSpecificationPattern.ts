import { useMutation } from "@tanstack/react-query";
import { DeleteSpecificationPatternRequest } from "../../../types";
import { deleteSpecificationPattern } from "../..";

export const useDeleteSpecificationPattern = () =>
  useMutation({
    mutationFn: async (model: DeleteSpecificationPatternRequest) => {
      const { status } = await deleteSpecificationPattern(model);
      return status;
    },
  });

export default useDeleteSpecificationPattern;
