import { IconButton, Tooltip, Typography, useTheme } from "@mui/material";
import { Paths } from "../../constants";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useRouter } from "../../routes/hooks";
import { useCart } from "../../context/CartContext";
import { useEffect, useState } from "react";

export const CartIcon = () => {
  const { cart } = useCart();
  const router = useRouter();
  const theme = useTheme();

  const [numberOfProducts, setNumberOfProducts] = useState<number>(0);

  useEffect(() => {
    if (cart) {
      setNumberOfProducts(
        cart?.products
          .map((x) => x.quantity)
          .reduce((partialSum, a) => partialSum + a, 0)
      );
    }
  }, [cart]);

  return (
    <>
      <IconButton
        sx={{ ml: 1 }}
        onClick={() => router.push(Paths.Cart.CART_DETAILS)}
        color="inherit"
      >
        <Tooltip title="Cart">
          <ShoppingCartIcon />
        </Tooltip>
      </IconButton>
      <Typography
        sx={{
          position: "absolute",
          top: "10px",
          right: "40px",
          backgroundColor: theme.palette.secondary.main,
          borderRadius: "15px",
          paddingX: "4px",
          paddingTop: "2px",
        }}
      >
        {numberOfProducts}
      </Typography>
    </>
  );
};

export default CartIcon;
