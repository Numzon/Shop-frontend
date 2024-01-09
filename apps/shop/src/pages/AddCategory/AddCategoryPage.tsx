import { Container, Typography } from "@mui/material";
import AddCategoryView from "../../features/category/AddCategoryView/AddCategoryView";

export const AddCategoryPage = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 3, mb: 5 }}>
        Category
      </Typography>
      <AddCategoryView />
    </Container>
  );
};

export default AddCategoryPage;
