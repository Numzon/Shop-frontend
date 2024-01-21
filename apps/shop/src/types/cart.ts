export type AddProductToCartRequest = {
  cartId: string;
  productId: string;
};

export type RemoveProductRequest = {
  cartId: string;
  productId: string;
};

export type SetQuantityRequest = {
  cartId: string;
  productId: string;
  quantity: number;
};

export type CartDto = {
  cartId: string;
  created: Date;
  products: CartProductDto[];
};

export type CartProductDto = {
  productId: string;
  quantity: number;
};

export type CartProductDetailsDto = {
  id: string;
  name: string;
  quantity: number;
};

export type CartProductDetailsResponse = {
  cartProducts: CartProductDetailsDto[];
};
