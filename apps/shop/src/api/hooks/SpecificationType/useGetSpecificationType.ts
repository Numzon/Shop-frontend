import { useQuery } from "@tanstack/react-query";
import { getSpecificationType } from "../../requests/specificationType";

export const useGetSpecificationType = (
  id: string,
  options?: { enabled: boolean }
) =>
  useQuery({
    queryKey: ["specification-type", id],
    queryFn: async () => {
      const { data } = await getSpecificationType(id);
      return data;
    },
    ...options,
  });

export default getSpecificationType;
