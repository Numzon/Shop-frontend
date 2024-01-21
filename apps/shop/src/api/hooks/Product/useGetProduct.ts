import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../..";

export const useGetProduct = (id: string, options?: { enabled: boolean }) =>
  useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const { data } = await getProduct(id);
      return data;
    },
    ...options,
  });

export default useGetProduct;
