import { useMutation } from "@tanstack/react-query";
import { EditCategoryRequest } from "../../../types";
import { editCategory } from "../../requests/category";

export const useEditCategory = () =>
  useMutation({
    mutationFn: async (model: EditCategoryRequest) => {
      const { status } = await editCategory(model);
      return status;
    },
  });

export default useEditCategory;
