import { useMutation } from "@tanstack/react-query";
import { removeProduct } from "../..";
import { CartDto, RemoveProductRequest } from "../../../types";
import { queryClient } from "../../../lib/react-query";
import { CartKeys } from "./cartKeys";

export const useRemoveProduct = () =>
  useMutation({
    mutationFn: async (model: RemoveProductRequest) => {
      const { data } = await removeProduct(model);
      return data;
    },
    onMutate: async (model: RemoveProductRequest) => {
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

      const products = cart.products.filter(
        (x) => x.productId != model.productId
      );

      const optimisticCart: CartDto = { ...cart, products: products };

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
