import { useQuery } from "@tanstack/react-query";
import { getProductDetails } from "../..";

export const useProductDetails = (id: string, options?: { enabled: boolean }) =>
  useQuery({
    queryKey: ["product-details", id],
    queryFn: async () => {
      const { data } = await getProductDetails(id);
      return data;
    },
    ...options,
  });

export default useProductDetails;
