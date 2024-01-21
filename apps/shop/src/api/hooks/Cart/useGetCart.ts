import { useQuery } from "@tanstack/react-query";
import { CartKeys } from "./cartKeys";
import { getCart } from "../..";

export const useGetCart = (cartId: string) =>
  useQuery({
    queryKey: [CartKeys.GET_CART, cartId],
    queryFn: async () => {
      const { data } = await getCart(cartId);
      return data;
    },
  });
