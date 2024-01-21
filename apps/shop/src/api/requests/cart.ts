import { CartUrls } from "../../constants";
import {
  AddProductToCartRequest,
  CartDto,
  CartProductDetailsResponse,
  RemoveProductRequest,
  SetQuantityRequest,
} from "../../types";
import fetch from "../../utils/fetch";

export const getCart = (
  cartId: string
): Promise<{ data: CartDto; status: number }> =>
  fetch.get(CartUrls.GET + "/" + cartId);

export const getCartProductsDetails = (
  cartId: string
): Promise<{ data: CartProductDetailsResponse; status: number }> =>
  fetch.get(CartUrls.GET_PRODUCTS_DETAILS + "/" + cartId);

export const addProductToCart = (
  model: AddProductToCartRequest
): Promise<{ data: CartDto; status: number }> =>
  fetch.post(CartUrls.ADD_PRODUCT, model);

export const setQuantity = (
  model: SetQuantityRequest
): Promise<{ data: CartDto; status: number }> =>
  fetch.put(CartUrls.SET_QUANTITY, model);

export const removeProduct = (
  model: RemoveProductRequest
): Promise<{ data: CartDto; status: number }> =>
  fetch.put(CartUrls.REMOVE_PRODUCT, model);
