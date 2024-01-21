import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { ProductGetAllRequest } from "../../../types";
import { getAllProducts } from "../..";

export const useGetAllProducts = (model: ProductGetAllRequest) =>
  useQuery({
    queryKey: ["product", model],
    queryFn: async () => {
      const { data } = await getAllProducts(model);
      return data;
    },
    placeholderData: keepPreviousData,
  });
export default useGetAllProducts;
