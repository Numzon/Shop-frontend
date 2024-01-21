import { useMutation } from "@tanstack/react-query";
import { CreateProductRequest } from "../../../types";
import { addProduct } from "../..";

export const useAddProduct = () =>
  useMutation({
    mutationFn: async (model: CreateProductRequest) => {
      const { data } = await addProduct(model);
      return data;
    },
  });

export default useAddProduct;
