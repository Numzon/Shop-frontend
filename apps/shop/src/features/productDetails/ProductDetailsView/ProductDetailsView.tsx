import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useProductDetails } from "../../../api/hooks/Product";
import { useParams } from "react-router-dom";
import React from "react";
import { useRouter } from "../../../routes/hooks";
import { SimpleCategoryDto } from "../../../types";
import { useCart } from "../../../context/CartContext";

type CategoryPathsProps = {
  categories: SimpleCategoryDto[];
};

const CategoryPaths = ({ categories }: CategoryPathsProps) => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Stack direction="row" sx={{ mb: 5, mt: 3 }}>
      {categories.map((category, index) => (
        <React.Fragment key={index}>
          <a onClick={() => router.push("category" + category.id)}>
            <Typography
              sx={{
                marginLeft: theme.spacing(1),
                color: theme.palette.text.primary,
                ":hover": { color: theme.palette.text.secondary },
                cursor: "pointer",
              }}
            >
              {category.name}
            </Typography>
          </a>
          {categories.length - (index + 1) > 0 && (
            <Typography sx={{ marginLeft: theme.spacing(1) }}>
              {" > "}
            </Typography>
          )}
        </React.Fragment>
      ))}
    </Stack>
  );
};

export const ProductDetailsView = () => {
  const { id } = useParams();
  const { addProductToCart } = useCart();

  const {
    data: product,
    isLoading,
    isError,
  } = useProductDetails(id!, { enabled: !!id });

  if (isLoading) {
    <Box>
      <Typography>Loading...</Typography>
    </Box>;
  }

  if (isError) {
    <Box>
      <Typography>Something went wrong...</Typography>
    </Box>;
  }

  return (
    <Box>
      <CategoryPaths categories={product?.categoriesPath ?? []} />
      <Grid container>
        <Grid item md={6}>
          IMAGE
        </Grid>
        <Grid item md={6}>
          <Card>
            <CardHeader title={product?.name} />
            <CardContent>
              <Grid container>
                <Grid item md={12}>
                  Some specifications
                </Grid>
                <Grid item md={12}>
                  <Stack justifyContent="center" alignItems="center">
                    <Button
                      variant="contained"
                      sx={{ marginTop: 3 }}
                      onClick={async () => {
                        if (product) {
                          await addProductToCart(product?.id);
                        }
                      }}
                    >
                      Add to cart
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={12}>
          <Card sx={{ marginTop: 3 }}>
            <CardContent>{product?.description}</CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetailsView;
