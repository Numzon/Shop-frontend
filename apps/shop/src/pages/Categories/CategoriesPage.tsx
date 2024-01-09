import { Container, Typography } from "@mui/material";
import LinkButton from "../../components/LinkButton";
import { Paths } from "../../constants";
import CategoriesTable from "../../features/category/CategoriesTable";

export const CategoriesPage = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 3, mb: 5 }}>
        Users
      </Typography>
      <LinkButton variant="contained" to={Paths.NEW_CATEGORY} sx={{ mb: 2 }}>
        Add
      </LinkButton>
      <CategoriesTable />
    </Container>
  );
};

export default CategoriesPage;
