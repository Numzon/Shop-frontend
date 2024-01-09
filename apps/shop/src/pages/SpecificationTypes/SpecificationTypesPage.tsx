import { Container, Typography } from "@mui/material";
import LinkButton from "../../components/LinkButton";
import { Paths } from "../../constants";
import SpecificationTypesTable from "../../features/specificationTypes/SpecificationTypesTable";

export const SpecificationTypePage = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 3, mb: 5 }}>
        Specification Types
      </Typography>
      <LinkButton
        to={Paths.NEW_SPECIFICATION_TYPES}
        variant="contained"
        sx={{ mb: 2 }}
      >
        Add
      </LinkButton>
      <SpecificationTypesTable />
    </Container>
  );
};

export default SpecificationTypePage;
