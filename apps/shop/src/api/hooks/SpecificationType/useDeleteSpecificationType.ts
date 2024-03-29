import { useMutation } from "@tanstack/react-query";
import { DeleteSpecificationTypeRequest } from "../../../types";
import { deleteSpecificationType } from "../..";

export const useDeleteSpecificationType = () =>
  useMutation({
    mutationFn: async (model: DeleteSpecificationTypeRequest) => {
      const { status } = await deleteSpecificationType(model);
      return status;
    },
  });

export default useDeleteSpecificationType;
