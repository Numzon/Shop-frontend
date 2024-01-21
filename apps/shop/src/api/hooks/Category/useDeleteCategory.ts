import { useMutation } from "@tanstack/react-query";
import { DeleteCategoryRequest } from "../../../types";
import { deleteCategory } from "../..";

export const useDeleteCategory = () =>
  useMutation({
    mutationFn: async (model: DeleteCategoryRequest) => {
      const { status } = await deleteCategory(model);
      return status;
    },
  });

export default useDeleteCategory;
