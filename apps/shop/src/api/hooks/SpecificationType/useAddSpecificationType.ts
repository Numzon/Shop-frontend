import { useMutation } from "@tanstack/react-query";
import { CreateSpecificationTypeRequest } from "../../../types";
import { addSpecificationType } from "../../requests/specificationType";

export const useAddSpecificationType = () =>
  useMutation({
    mutationFn: async (model: CreateSpecificationTypeRequest) => {
      const { data } = await addSpecificationType(model);
      return data;
    },
  });

export default useAddSpecificationType;
