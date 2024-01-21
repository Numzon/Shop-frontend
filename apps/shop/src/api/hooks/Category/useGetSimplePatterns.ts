import { useQuery } from "@tanstack/react-query";
import { getPatterns } from "../..";

export const useGetSimplePatterns = () =>
  useQuery({
    queryKey: ["simple-patterns"],
    queryFn: async () => {
      const { data } = await getPatterns();
      return data;
    },
  });

export default useGetSimplePatterns;
