import { GetSpecificationTypeRequest } from "./../../../types/specificationType";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getAllSpecificationTypes } from "../../requests/specificationType";

export const useGetAllSpecificationTypes = (
  model: GetSpecificationTypeRequest
) =>
  useQuery({
    queryKey: ["specification-type", model.searchString],
    queryFn: async () => {
      const { data } = await getAllSpecificationTypes(model);
      return data;
    },
    placeholderData: keepPreviousData,
  });
export default useGetAllSpecificationTypes;
