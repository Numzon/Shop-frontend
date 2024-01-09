import { Container, Typography } from "@mui/material";
import AddSpecificationTypeView from "../../features/specificationTypes/AddSpecificationTypeView";

export const AddSpecificationTypePage = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5, mt: 3 }}>
        Specification Type
      </Typography>
      <AddSpecificationTypeView />
    </Container>
  );
};

export default AddSpecificationTypePage;
