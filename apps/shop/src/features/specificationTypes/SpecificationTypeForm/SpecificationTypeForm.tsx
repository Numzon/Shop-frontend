import { Button, Grid, Stack } from "@mui/material";
import { useFormContext } from "react-hook-form";
import FormTextField from "../../../components/FormInputs/FormTextField";
import FormSection from "../../../components/FormSection";
import FormFieldArray from "../../../components/FormFieldArray";
import FormHiddenInput from "../../../components/FormHiddenInput";
import { Paths } from "../../../constants";
import { SpecificationTypeFormValues } from ".";

type SpecificationTypeFormProps = {
  onCancel: () => void;
};

export const SpecificationTypeForm = ({
  onCancel,
}: SpecificationTypeFormProps) => {
  const {
    formState: { isSubmitting },
  } = useFormContext<SpecificationTypeFormValues>();

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
          collectionName="subtypes"
          title="Subtypes"
          editPath={Paths.SpecificationTypes.EDIT_SPECIFICATION_TYPES}
          formFieldNames={[
            { name: "id", hidden: true, isFieldId: true },
            { name: "name", label: "Name" },
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

export default SpecificationTypeForm;
