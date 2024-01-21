import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../..";
import { UserKeys } from "./userKeys";

export const useGetCurrentUser = (id: string) =>
  useQuery({
    queryKey: [UserKeys.USER_DATA, id],
    queryFn: async () => {
      const { data } = await getCurrentUser();
      return data;
    },
  });

export default useGetCurrentUser;
