import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { CategoryGetAllRequest } from "../../../types";
import { getAllCategories } from "../..";

export const useGetAllCategories = (model: CategoryGetAllRequest) =>
  useQuery({
    queryKey: ["category", model],
    queryFn: async () => {
      const { data } = await getAllCategories(model);
      return data;
    },
    placeholderData: keepPreviousData,
  });
export default useGetAllCategories;
