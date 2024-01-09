import { Container, Typography } from "@mui/material";
import EditSpecificationPatternView from "../../features/specificationPattern/EditSpecificationPatternView";

export const EditSpecificationPatternPage = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5, mt: 3 }}>
        Specification Pattern
      </Typography>
      <EditSpecificationPatternView />
    </Container>
  );
};

export default EditSpecificationPatternPage;
