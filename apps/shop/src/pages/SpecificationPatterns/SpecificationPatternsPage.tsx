import { Container, Typography } from "@mui/material";
import LinkButton from "../../components/LinkButton";
import { Paths } from "../../constants";
import SpecificationPatternTable from "../../features/specificationPattern/SpecificationPatternTable";

export const SpecificationPatternsPage = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 3, mb: 5 }}>
        Specification Patterns
      </Typography>
      <LinkButton
        to={Paths.SpecificationPatterns.NEW_SPECIFICATION_PATTERNS}
        variant="contained"
        sx={{ mb: 2 }}
      >
        Add
      </LinkButton>
      <SpecificationPatternTable />
    </Container>
  );
};

export default SpecificationPatternsPage;
