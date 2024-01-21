import {
  Card,
  Stack,
  CardHeader,
  Typography,
  CardContent,
  IconButton,
  useTheme,
} from "@mui/material";
import { useCart } from "../../../context/CartContext";
import { useGetCartProductsDetails } from "../../../api";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

type CartProductsProps = {
  cartId: string;
  onDelete: (productId: string) => void;
  onSetQuantity: (productId: string, quantity: number) => void;
};

const CartProducts = ({
  cartId,
  onDelete,
  onSetQuantity,
}: CartProductsProps) => {
  const { data, isError, isLoading, refetch } =
    useGetCartProductsDetails(cartId);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (isError) {
    return <Typography>Something went wrong...</Typography>;
  }

  if (!data) {
    return null;
  }

  return (
    <>
      {data?.cartProducts.map((product, index) => (
        <Card key={index}>
          <CardHeader title={product.name} />
          <CardContent>
            <Typography sx={{ mb: 5 }}>Image...</Typography>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
            >
              <Typography>Quantity: </Typography>
              <IconButton
                color="error"
                onClick={async () => {
                  await onSetQuantity(product.id, product.quantity - 1);
                  refetch();
                }}
              >
                <RemoveIcon />
              </IconButton>
              <Typography>{product.quantity}</Typography>
              <IconButton
                color="success"
                onClick={async () => {
                  await onSetQuantity(product.id, product.quantity + 1);
                  refetch();
                }}
              >
                <AddIcon />
              </IconButton>
              <IconButton
                color="error"
                onClick={async () => {
                  await onDelete(product.id);
                  refetch();
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export const CartDetailsView = () => {
  const { cart, removeProductFromCart, setProductQuantity } = useCart();

  if (!cart) {
    return <Typography>You cart is empty</Typography>;
  }

  return (
    <Stack spacing={3}>
      <CartProducts
        cartId={cart.cartId}
        onDelete={removeProductFromCart}
        onSetQuantity={setProductQuantity}
      />
    </Stack>
  );
};

export default CartDetailsView;
