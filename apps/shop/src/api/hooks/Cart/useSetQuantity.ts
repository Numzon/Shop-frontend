import { useMutation } from "@tanstack/react-query";
import { CartDto, SetQuantityRequest } from "../../../types";
import { setQuantity } from "../..";
import { queryClient } from "../../../lib/react-query";
import { CartKeys } from "./cartKeys";

export const useSetQuantity = () =>
  useMutation({
    mutationFn: async (model: SetQuantityRequest) => {
      const { data } = await setQuantity(model);
      return data;
    },
    onMutate: async (model: SetQuantityRequest) => {
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

      const products = cart.products.filter((item) => {
        if (item.productId != model.productId) {
          return item;
        }

        return {
          ...item,
          quantity: model.quantity,
        };
      });

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
