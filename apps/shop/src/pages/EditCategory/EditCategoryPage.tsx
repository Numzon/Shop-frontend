import { Container, Typography } from "@mui/material";
import { EditCategoryView } from "../../features/category/EditCategoryView/EditCategoryView";

export const EditCategoryPage = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 3, mb: 5 }}>
        Category
      </Typography>
      <EditCategoryView />
    </Container>
  );
};

export default EditCategoryPage;
