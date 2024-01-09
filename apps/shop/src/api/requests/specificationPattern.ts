import { PatternUrls, TypesUrls } from "../../constants";
import {
  CreateSpecificationPatternRequest,
  DeleteSpecificationPatternRequest,
  EditSpecificationPatternRequest,
  GetAllSpecificationPatternRequest,
  GetAllSpecificationPatternResponse,
  SimpleSpecificationPattern,
  SimpleSpecificationTypeDto,
  SpecificationPatternDto,
} from "../../types";
import fetch from "../../utils/fetch";

export const getAllSpecificationPatterns = (
  model: GetAllSpecificationPatternRequest
): Promise<{ data: GetAllSpecificationPatternResponse; status: number }> =>
  fetch.get(PatternUrls.GET + "?" + new URLSearchParams(model).toString());

export const addSpecificationPattern = (
  model: CreateSpecificationPatternRequest
): Promise<{ data: SimpleSpecificationPattern }> =>
  fetch.post(PatternUrls.CREATE, model);

export const deleteSpecificationPattern = (
  model: DeleteSpecificationPatternRequest
): Promise<{ status: number }> =>
  fetch.delete(PatternUrls.DELETE + "/" + model.id);

export const editSpecificationPattern = (
  model: EditSpecificationPatternRequest
): Promise<{ status: number }> => fetch.put(PatternUrls.EDIT, model);

export const getSpecificationPattern = (
  id: string
): Promise<{ data: SpecificationPatternDto; status: number }> =>
  fetch.get(PatternUrls.GET + "/" + id);

export const getTypes = (): Promise<{
  data: SimpleSpecificationTypeDto[];
  status: number;
}> => fetch.get(TypesUrls.GET_SELECT_LIST);
