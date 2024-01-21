import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../..";

export const useGetCategory = (id: string, options?: { enabled: boolean }) =>
  useQuery({
    queryKey: ["category", id],
    queryFn: async () => {
      const { data } = await getCategory(id);
      return data;
    },
    ...options,
  });

export default useGetCategory;
