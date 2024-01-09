import {
  CreateSpecificationTypeRequest,
  CreateSubtypeDto,
  EditSpecificationTypeRequest,
  EditSubtypeDto,
  SpecificationTypeDto,
} from "../../../types";
import { SpecificationTypeFormValues } from ".";

export const mapSpecificationTypeFormValuesToCreateSpecificationTypeRequest = (
  values: SpecificationTypeFormValues
) => {
  const model: CreateSpecificationTypeRequest = {
    name: values.name,
    subtypes:
      values.subtypes?.map<CreateSubtypeDto>((item) => ({
        name: item.name,
      })) ?? [],
  };

  return model;
};

export const mapSpecificationTypeFormValuesToEditSpecificationTypeRequest = (
  values: SpecificationTypeFormValues
) => {
  const model: EditSpecificationTypeRequest = {
    id: values.id ?? "",
    name: values.name,
    subtypes:
      values.subtypes.map<EditSubtypeDto>((item) => ({
        id: item.id === "" ? undefined : item.id,
        name: item.name,
      })) ?? [],
  };
  console.log(model);
  return model;
};

export const mapSpecificationTypeDtoToSpecificationTypeFormValues = (
  model: SpecificationTypeDto
) => {
  const values: SpecificationTypeFormValues = {
    id: model.id,
    name: model.name,
    subtypes:
      model.subtypes?.map((item) => ({ id: item.id, name: item.name })) ?? [],
  };
  return values;
};
