import { Meta } from ".";

export type CategoryGetAllRequest = {
  searchString: string;
  pageIndex: string;
  pageSize: string;
};

export type CategoryListItemDto = {
  id: string;
  name: string;
  subcategoriesCount: number;
};

export type CategoryGetAllResponse = {
  data: CategoryListItemDto[];
  meta: Meta;
};

export type CreateCategoryRequest = {
  name: string;
  subcategories: CreateSubcategoryDto[];
};

export type CreateSubcategoryDto = {
  name: string;
};

export type SimpleCategoryDto = {
  id: string;
  name: string;
};

export type DeleteCategoryRequest = {
  id: string;
};

export type CategorySpecificationPatternDto = {
  id: string;
  name: string;
};

export type CategoryDto = {
  id: string;
  name: string;
  parentCategory: SimpleCategoryDto;
  hasSubcategories: boolean;
  specificationPattern: CategorySpecificationPatternDto;
  subcategories: SimpleSubcategoryDto[];
};

export type SimpleSubcategoryDto = {
  id: string;
  name: string;
};

export type EditCategoryRequest = Omit<
  CategoryDto,
  | "subcategories"
  | "specificationPattern"
  | "parentCategory"
  | "hasSubcategories"
> & {
  specificationPatternId?: string;
  subcategories: EditSubcategoryDto[];
};

export type EditSubcategoryDto = {
  id?: string;
  name: string;
};

export type SimplePatternDto = {
  id: string;
  name: string;
};
