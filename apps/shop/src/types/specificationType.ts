import { Meta } from ".";

export type SpecificationTypeListDto = {
  id: string;
  name: string;
  subspecificationTypeCount: number;
};

export type GetSpecificationTypeRequest = {
  searchString?: string;
  pageIndex: string;
  pageSize: string;
};

export type GetSpecificationTypesResponse = {
  data: SpecificationTypeListDto[];
  meta: Meta;
};

export type CreateSpecificationTypeRequest = {
  name: string;
  subtypes: CreateSubtypeDto[];
};

export type CreateSubtypeDto = {
  name: string;
};

export type SimpleSpecificationTypeDto = {
  id: string;
  name: string;
};

export type DeleteSpecificationTypeRequest = {
  id: string;
};

export type SpecificationTypeDto = {
  id: string;
  name: string;
  parent: SimpleSpecificationTypeDto;
  subtypes: SimpleSpecificationTypeDto[];
};

export type EditSubtypeDto = {
  id?: string;
  name: string;
};

export type EditSpecificationTypeRequest = Omit<
  SpecificationTypeDto,
  "subtypes" | "parent"
> & {
  subtypes: EditSubtypeDto[];
};
