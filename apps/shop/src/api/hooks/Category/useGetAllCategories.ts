import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { CategoryGetAllRequest } from "../../../types";
import { getAllCategories } from "../../requests/category";

export const useGetAllCategories = (model: CategoryGetAllRequest) =>
  useQuery({
    queryKey: ["category", model.searchString],
    queryFn: async () => {
      const { data } = await getAllCategories(model);
      return data;
    },
    placeholderData: keepPreviousData,
  });
export default useGetAllCategories;
