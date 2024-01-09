import { Meta } from ".";

export type GetAllSpecificationPatternRequest = {
  searchString: string;
  pageIndex: string;
  pageSize: string;
};

export type SpecificationPatternListItemDto = {
  id: string;
  name: string;
};

export type GetAllSpecificationPatternResponse = {
  data: SpecificationPatternListItemDto[];
  meta: Meta;
};

export type CreateSpecificationPatternRequest = {
  name: string;
  types: CreatePatternTypeDto[];
};

export type CreatePatternTypeDto = {
  id: string;
};

export type DeleteSpecificationPatternRequest = {
  id: string;
};

export type SimplePatternType = {
  id?: string;
  specificationTypeId: string;
};

export type SpecificationPatternDto = {
  id: string;
  name: string;
  types: SimplePatternType[];
};

export type EditSpecificationPatternRequest = SpecificationPatternDto & {};

export type SimpleSpecificationPattern = {
  id: string;
  name: string;
};
