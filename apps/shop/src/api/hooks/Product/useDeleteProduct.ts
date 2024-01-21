import { useMutation } from "@tanstack/react-query";
import { DeleteProductRequest } from "../../../types";
import { deleteProduct } from "../..";

export const useDeleteProduct = () =>
  useMutation({
    mutationFn: async (model: DeleteProductRequest) => {
      const { status } = await deleteProduct(model);
      return status;
    },
  });

export default useDeleteProduct;
