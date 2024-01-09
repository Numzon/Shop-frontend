import { SpecificationPatternFormValues } from ".";
import {
  CreatePatternTypeDto,
  CreateSpecificationPatternRequest,
  EditSpecificationPatternRequest,
  SimplePatternType,
  SpecificationPatternDto,
} from "../../../types";

export const mapSpecificationPatternFormValuesToCreateSpecificationPatternRequest =
  (values: SpecificationPatternFormValues) => {
    const model: CreateSpecificationPatternRequest = {
      name: values.name,
      types:
        values.types?.map<CreatePatternTypeDto>((item) => ({
          id: item.specificationTypeId,
        })) ?? [],
    };

    return model;
  };

export const mapSpecificationPatternFormValuesToEditSpecificationPatternRequest =
  (values: SpecificationPatternFormValues) => {
    const model: EditSpecificationPatternRequest = {
      id: values.id ?? "",
      name: values.name,
      types:
        values.types.map<SimplePatternType>((item) => ({
          id: item.id === "" ? undefined : item.id,
          specificationTypeId: item.specificationTypeId,
        })) ?? [],
    };
    return model;
  };

export const mapSpecificationPatternDtoToSpecificationPatternFormValues = (
  model: SpecificationPatternDto
) => {
  const values: SpecificationPatternFormValues = {
    id: model.id,
    name: model.name,
    types:
      model.types?.map((item) => ({
        id: item.id,
        specificationTypeId: item.specificationTypeId,
      })) ?? [],
  };
  return values;
};
