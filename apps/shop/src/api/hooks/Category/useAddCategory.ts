import { useMutation } from "@tanstack/react-query";
import { CreateCategoryRequest } from "../../../types";
import { addCategory } from "../../requests/category";

export const useAddCategory = () =>
  useMutation({
    mutationFn: async (model: CreateCategoryRequest) => {
      const { data } = await addCategory(model);
      return data;
    },
  });

export default useAddCategory;
