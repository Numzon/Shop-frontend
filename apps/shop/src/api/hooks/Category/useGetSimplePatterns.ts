import { useQuery } from "@tanstack/react-query";
import { getPatterns } from "../../requests/category";

export const useGetSimplePatterns = () =>
  useQuery({
    queryKey: ["simple-patterns"],
    queryFn: async () => {
      const { data } = await getPatterns();
      return data;
    },
  });

export default useGetSimplePatterns;
