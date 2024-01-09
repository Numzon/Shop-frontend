import { Button, Grid, Stack } from "@mui/material";
import { useFormContext } from "react-hook-form";
import FormTextField from "../../../components/FormInputs/FormTextField";
import FormSection from "../../../components/FormSection";
import FormFieldArray from "../../../components/FormFieldArray";
import FormHiddenInput from "../../../components/FormHiddenInput";
import { SpecificationPatternFormValues } from ".";
import { SelectItem } from "../../../types";

type SpecificationPatternFormProps = {
  onCancel: () => void;
  types?: SelectItem[];
};

export const SpecificationPatternForm = ({
  onCancel,
  types,
}: SpecificationPatternFormProps) => {
  const {
    formState: { isSubmitting },
  } = useFormContext<SpecificationPatternFormValues>();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        <FormSection title="Details">
          <Stack spacing={1}>
            <FormHiddenInput name="id" />
            <FormTextField name="name" label="Name" />
          </Stack>
        </FormSection>
      </Grid>
      <Grid item xs={12}>
        <FormFieldArray
          collectionName="types"
          title="Subtypes"
          editPath=""
          formFieldNames={[
            { name: "id", hidden: true, isFieldId: true },
            {
              name: "specificationTypeId",
              label: "Specification Type",
              select: true,
              selectItems: types,
            },
          ]}
        />
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent={"flex-end"} spacing={3}>
          <Button variant="outlined" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="contained" type="submit" disabled={isSubmitting}>
            Save
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default SpecificationPatternForm;
