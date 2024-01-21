import { useQuery } from "@tanstack/react-query";
import { CartKeys } from "./cartKeys";
import { getCartProductsDetails } from "../..";

export const useGetCartProductsDetails = (cartId: string) =>
  useQuery({
    queryKey: [CartKeys.GET_CART_PRODUCTS_DETAILS, cartId],
    queryFn: async () => {
      const { data } = await getCartProductsDetails(cartId);
      return data;
    },
  });
