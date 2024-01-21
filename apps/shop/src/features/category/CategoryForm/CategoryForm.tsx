import { Button, Grid, Stack } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { CategoryFormValues } from ".";
import FormTextField from "../../../components/FormInputs/FormTextField";
import FormSection from "../../../components/FormSection";
import FormFieldArray from "../../../components/FormFieldArray";
import FormHiddenInput from "../../../components/FormHiddenInput";
import { Paths } from "../../../constants";
import FormSelectField from "../../../components/FormSelectField";
import { SelectItem } from "../../../types";

type CategoryFormProps = {
  onCancel: () => void;
  hasSubcategories?: boolean;
  patterns?: SelectItem[];
};

export const CategoryForm = ({
  onCancel,
  hasSubcategories,
  patterns,
}: CategoryFormProps) => {
  const {
    formState: { isSubmitting },
  } = useFormContext<CategoryFormValues>();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        <FormSection title="Details">
          <Stack spacing={1}>
            <FormHiddenInput name="id" />
            <FormTextField name="name" label="Category Name" />
          </Stack>
        </FormSection>
      </Grid>
      {hasSubcategories === false && (
        <Grid item xs={12} md={12}>
          <FormSection title="Specification Pattern">
            <Stack spacing={1}>
              <FormSelectField
                name="specificationPatternId"
                label="Pattern"
                selectItems={patterns ?? []}
              />
            </Stack>
          </FormSection>
        </Grid>
      )}
      <Grid item xs={12}>
        <FormFieldArray
          collectionName="subcategories"
          title="Subcategories"
          editPath={Paths.Category.EDIT_CATEGORY}
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

export default CategoryForm;
