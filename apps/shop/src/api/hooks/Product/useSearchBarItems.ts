import { useQuery } from "@tanstack/react-query";
import { getSearchBarItems } from "../..";
import { GetSearchBarItemsRequest } from "../../../types";

export const useSearchBarItems = (model: GetSearchBarItemsRequest) =>
  useQuery({
    queryKey: ["search-bar", model],
    queryFn: async () => {
      const { data } = await getSearchBarItems(model);
      return data;
    },
  });

export default useSearchBarItems;
