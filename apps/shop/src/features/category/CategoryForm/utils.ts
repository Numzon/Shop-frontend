import {
  CategoryDto,
  CreateSubcategoryDto,
  EditCategoryRequest,
  EditSubcategoryDto,
} from "./../../../types/category";
import { CategoryFormValues } from ".";
import { CreateCategoryRequest } from "../../../types";

export const mapCategoryFormValuesToCreateCategoryRequest = (
  values: CategoryFormValues
) => {
  const model: CreateCategoryRequest = {
    name: values.name,
    subcategories:
      values.subcategories?.map<CreateSubcategoryDto>((item) => ({
        name: item.name,
      })) ?? [],
  };

  return model;
};

export const mapCategoryFormValuesToEditCategoryRequest = (
  values: CategoryFormValues
) => {
  const model: EditCategoryRequest = {
    id: values.id ?? "",
    name: values.name,
    specificationPatternId: values.specificationPatternId,
    subcategories:
      values.subcategories.map<EditSubcategoryDto>((item) => ({
        id: item.id === "" ? undefined : item.id,
        name: item.name,
      })) ?? [],
  };
  return model;
};

export const mapCategoryDtoToUserFormValues = (model: CategoryDto) => {
  const values: CategoryFormValues = {
    id: model.id,
    name: model.name,
    specificationPatternId: model.specificationPattern?.id ?? undefined,
    subcategories:
      model.subcategories?.map((item) => ({ id: item.id, name: item.name })) ??
      [],
  };
  return values;
};
