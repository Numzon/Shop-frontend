import { useMutation } from "@tanstack/react-query";
import { editProduct } from "../../requests";
import { EditProductRequest } from "../../../types";

export const useEditProduct = () =>
  useMutation({
    mutationFn: async (model: EditProductRequest) => {
      const { status } = await editProduct(model);
      return status;
    },
  });

export default useEditProduct;
