import { Container, Typography } from "@mui/material";
import AddSpecificationPatternView from "../../features/specificationPattern/AddSpecificationPatternView";

export const AddSpecificationPatternPage = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5, mt: 3 }}>
        Specification Pattern
      </Typography>
      <AddSpecificationPatternView />
    </Container>
  );
};

export default AddSpecificationPatternPage;
