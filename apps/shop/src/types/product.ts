import { Meta, SimpleCategoryDto } from ".";

export type ProductGetAllRequest = {
  searchString: string;
  pageIndex: string;
  pageSize: string;
};

export type ProductListItemDto = {
  id: string;
  name: string;
  category: SimpleCategoryDto;
};

export type ProductGetAllResponse = {
  data: ProductListItemDto[];
  meta: Meta;
};

export type CreateProductRequest = {
  name: string;
  description?: string;
  categoryId: string;
};

export type DeleteProductRequest = {
  id: string;
};

export type ProductDto = {
  id: string;
  name: string;
  description?: string;
  category: SimpleCategoryDto;
};

export type EditProductRequest = Omit<ProductDto, "category"> & {
  categoryId: string;
};

export type SearchBarItemDto = {
  id: string;
  name: string;
  isCategory: boolean;
};

export type GetSearchBarItemsRequest = {
  searchString?: string;
  pageSize: string;
};

export type GetSearchBarItemsResponse = {
  data: SearchBarItemDto[];
};

export type SimpleProductDto = {
  id: string;
  name: string;
};

export type ProductDetailsDto = {
  id: string;
  name: string;
  description?: string;
  categoriesPath: SimpleCategoryDto[];
};
