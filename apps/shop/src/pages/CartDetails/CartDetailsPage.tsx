import { Container, Typography } from "@mui/material";
import CartDetailsView from "../../features/cartDetails/CartDetailsView";

export const CartDetailsPage = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 3, mb: 5 }}>
        Cart Details
      </Typography>
      <CartDetailsView />
    </Container>
  );
};

export default CartDetailsPage;
