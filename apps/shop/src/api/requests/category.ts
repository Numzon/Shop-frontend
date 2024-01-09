import {
  CategoryDto,
  CategoryGetAllRequest,
  CategoryGetAllResponse,
  CreateCategoryRequest,
  DeleteCategoryRequest,
  EditCategoryRequest,
  SelectItem,
  SimpleCategoryDto,
} from "../../types";
import { fetch } from ".";
import { CategoryUrls, PatternUrls } from "../../constants";

export const getAllCategories = (
  model: CategoryGetAllRequest
): Promise<{ data: CategoryGetAllResponse; status: number }> =>
  fetch.get(CategoryUrls.GET + "?" + new URLSearchParams(model).toString());

export const addCategory = (
  model: CreateCategoryRequest
): Promise<{ data: SimpleCategoryDto; status: number }> =>
  fetch.post(CategoryUrls.CREATE, model);

export const deleteCategory = (
  model: DeleteCategoryRequest
): Promise<{ status: number }> =>
  fetch.delete(CategoryUrls.DELETE + "/" + model.id);

export const editCategory = (
  model: EditCategoryRequest
): Promise<{ status: number }> => fetch.put(CategoryUrls.EDIT, model);

export const getCategory = (
  id: string
): Promise<{ data: CategoryDto; status: number }> =>
  fetch.get(CategoryUrls.GET + "/" + id);

export const getPatterns = (): Promise<{
  data: SelectItem[];
  status: number;
}> => fetch.get(PatternUrls.GET_SELECT_LIST);
