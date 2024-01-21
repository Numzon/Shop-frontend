import { createContext, useEffect, useState } from "react";
import { CartDto } from "../../types";
import {
  useAddProductToCart,
  useGetCart,
  useRemoveProduct,
  useSetQuantity,
} from "../../api";
import { SessionStorage } from "../../constants/sessionStorage";

type CartContextValue = {
  cart?: CartDto;
  addProductToCart: (productId: string) => Promise<void>;
  removeProductFromCart: (productId: string) => Promise<void>;
  setProductQuantity: (productId: string, quantity: number) => Promise<void>;
};

export const CartContext = createContext<CartContextValue>(
  {} as CartContextValue
);

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartId] = useState<string>(
    sessionStorage.getItem(SessionStorage.CART_ID) ?? crypto.randomUUID()
  );

  const { data: cart, refetch } = useGetCart(cartId);
  const { mutateAsync: addProductAsync } = useAddProductToCart();
  const { mutateAsync: removeProductAsync } = useRemoveProduct();
  const { mutateAsync: setQuantityAsync } = useSetQuantity();

  const addProductToCart = async (productId: string) => {
    await addProductAsync(
      { cartId: cartId, productId: productId },
      {
        onSuccess: () => {
          refetch();
        },
        onError: (error) => {
          console.error(error);
        },
      }
    );
  };

  const removeProductFromCart = async (productId: string) => {
    await removeProductAsync(
      { productId: productId, cartId: cartId },
      {
        onSuccess: () => {
          refetch();
        },
        onError: (error) => {
          console.error(error);
        },
      }
    );
  };

  const setProductQuantity = async (productId: string, quantity: number) => {
    await setQuantityAsync(
      { productId: productId, quantity: quantity, cartId: cartId },
      {
        onSuccess: () => {
          refetch();
        },
        onError: (error) => {
          console.error(error);
        },
      }
    );
  };

  useEffect(() => {
    if (cartId && !sessionStorage.getItem(SessionStorage.CART_ID)) {
      sessionStorage.setItem(SessionStorage.CART_ID, cartId);
    }
  }, [cartId]);

  const values = {
    cart: cart,
    addProductToCart,
    removeProductFromCart,
    setProductQuantity,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
