import { useQuery } from "@tanstack/react-query";
import { getSpecificationPattern } from "../../requests/specificationPattern";

export const useGetSpecificationPattern = (
  id: string,
  options?: { enabled: boolean }
) =>
  useQuery({
    queryKey: ["specification-pattern", id],
    queryFn: async () => {
      const { data } = await getSpecificationPattern(id);
      return data;
    },
    ...options,
  });

export default useGetSpecificationPattern;
