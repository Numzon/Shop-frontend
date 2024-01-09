import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getAllSpecificationPatterns } from "../../requests/specificationPattern";
import { GetAllSpecificationPatternRequest } from "../../../types";

export const useGetAllSpecificationPatterns = (
  model: GetAllSpecificationPatternRequest
) =>
  useQuery({
    queryKey: ["specification-pattern", model.searchString],
    queryFn: async () => {
      const { data } = await getAllSpecificationPatterns(model);
      return data;
    },
    placeholderData: keepPreviousData,
  });
export default useGetAllSpecificationPatterns;
