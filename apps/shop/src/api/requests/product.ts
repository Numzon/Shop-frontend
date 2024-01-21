import { ProductUrls } from "../../constants";
import {
  CreateProductRequest,
  DeleteProductRequest,
  EditProductRequest,
  GetSearchBarItemsRequest,
  GetSearchBarItemsResponse,
  ProductDetailsDto,
  ProductDto,
  ProductGetAllRequest,
  ProductGetAllResponse,
  SimpleProductDto,
} from "../../types/product";
import { fetch } from ".";

export const getAllProducts = (
  model: ProductGetAllRequest
): Promise<{ data: ProductGetAllResponse; status: number }> =>
  fetch.get(ProductUrls.GET + "?" + new URLSearchParams(model).toString());

export const addProduct = (
  model: CreateProductRequest
): Promise<{ data: SimpleProductDto; status: number }> =>
  fetch.post(ProductUrls.CREATE, model);

export const deleteProduct = (
  model: DeleteProductRequest
): Promise<{ status: number }> =>
  fetch.delete(ProductUrls.DELETE + "/" + model.id);

export const editProduct = (
  model: EditProductRequest
): Promise<{ status: number }> => fetch.put(ProductUrls.EDIT, model);

export const getProduct = (
  id: string
): Promise<{ data: ProductDto; status: number }> =>
  fetch.get(ProductUrls.GET + "/" + id);

export const getSearchBarItems = (
  model: GetSearchBarItemsRequest
): Promise<{ data: GetSearchBarItemsResponse; status: number }> =>
  fetch.get(
    ProductUrls.SEARCH_BAR + "?" + new URLSearchParams(model).toString()
  );

export const getProductDetails = (
  id: string
): Promise<{ data: ProductDetailsDto; status: number }> =>
  fetch.get(ProductUrls.PRODUCT_DETAILS + "/" + id);
