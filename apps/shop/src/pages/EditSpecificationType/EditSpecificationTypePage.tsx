import { Container, Typography } from "@mui/material";
import EditSpecificationTypeView from "../../features/specificationTypes/EditSpecificationTypeView";

export const EditSpecificationTypePage = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5, mt: 3 }}>
        Specification Type
      </Typography>
      <EditSpecificationTypeView />
    </Container>
  );
};

export default EditSpecificationTypePage;
