import { useMutation } from "@tanstack/react-query";
import {
  AddProductToCartRequest,
  CartDto,
  CartProductDto,
} from "../../../types";
import { addProductToCart } from "../..";
import { queryClient } from "../../../lib/react-query";
import { CartKeys } from "./cartKeys";

export const useAddProductToCart = () =>
  useMutation({
    mutationFn: async (model: AddProductToCartRequest) => {
      const { data } = await addProductToCart(model);
      return data;
    },
    onMutate: async (model: AddProductToCartRequest) => {
      await queryClient.cancelQueries({
        queryKey: [CartKeys.GET_CART, model.cartId],
      });

      var cart = queryClient.getQueryData<CartDto>([
        CartKeys.GET_CART,
        model.cartId,
      ]);

      if (!cart) {
        return cart;
      }

      const product: CartProductDto = {
        productId: model.productId,
        quantity: 1,
      };

      const optimisticCart: CartDto = {
        ...cart,
        products: [...cart.products, product],
      };

      queryClient.setQueryData<CartDto>(
        [CartKeys.GET_CART, model.cartId],
        cart
      );

      return { optimisticCart };
    },
    onSuccess: (result, variables, _context) => {
      queryClient.setQueryData<CartDto>(
        [CartKeys.GET_CART, variables.cartId],
        result
      );
    },
    onError: (_error, variables, _context) => {
      queryClient.setQueryData<CartDto>(
        [CartKeys.GET_CART, variables.cartId],
        undefined
      );
    },
  });
