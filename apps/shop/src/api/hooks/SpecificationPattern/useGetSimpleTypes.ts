import { useQuery } from "@tanstack/react-query";
import { getTypes } from "../..";

export const useGetSimpleTypes = () =>
  useQuery({
    queryKey: ["simple-types"],
    queryFn: async () => {
      const { data } = await getTypes();
      return data;
    },
  });

export default useGetSimpleTypes;
