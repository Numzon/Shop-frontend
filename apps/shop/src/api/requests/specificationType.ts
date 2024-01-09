import { TypesUrls } from "../../constants";
import {
  CreateSpecificationTypeRequest,
  DeleteSpecificationTypeRequest,
  EditSpecificationTypeRequest,
  GetSpecificationTypeRequest,
  GetSpecificationTypesResponse,
  SimpleSpecificationTypeDto,
  SpecificationTypeDto,
} from "../../types";
import fetch from "../../utils/fetch";

export const getAllSpecificationTypes = (
  model: GetSpecificationTypeRequest
): Promise<{ data: GetSpecificationTypesResponse; status: number }> =>
  fetch.get(TypesUrls.GET + "?" + new URLSearchParams(model).toString());

export const addSpecificationType = (
  model: CreateSpecificationTypeRequest
): Promise<{ data: SimpleSpecificationTypeDto }> =>
  fetch.post(TypesUrls.CREATE, model);

export const deleteSpecificationType = (
  model: DeleteSpecificationTypeRequest
): Promise<{ status: number }> =>
  fetch.delete(TypesUrls.DELETE + "/" + model.id);

export const editSpecificationType = (
  model: EditSpecificationTypeRequest
): Promise<{ status: number }> => fetch.put(TypesUrls.EDIT, model);

export const getSpecificationType = (
  id: string
): Promise<{ data: SpecificationTypeDto; status: number }> =>
  fetch.get(TypesUrls.GET + "/" + id);
