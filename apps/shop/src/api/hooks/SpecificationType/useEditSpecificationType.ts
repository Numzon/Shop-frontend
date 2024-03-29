import { useMutation } from "@tanstack/react-query";
import { EditSpecificationTypeRequest } from "../../../types";
import { editSpecificationType } from "../..";

export const useEditSpecificationType = () =>
  useMutation({
    mutationFn: async (model: EditSpecificationTypeRequest) => {
      const { status } = await editSpecificationType(model);
      return status;
    },
  });

export default useEditSpecificationType;
