import { useFieldArray, useFormContext } from "react-hook-form";
import FormSection from "../FormSection";
import { Button, Grid } from "@mui/material";
import FormTextField from "../FormInputs/FormTextField";
import FormHiddenInput from "../FormHiddenInput";
import { useRouter } from "../../routes/hooks";
import { SelectItem } from "../../types";
import FormSelectField from "../FormSelectField";

type FormFieldProps = {
  name: string;
  label?: string;
  isFieldId?: boolean;
  hidden?: boolean;
  select?: boolean;
  selectItems?: SelectItem[];
};

type FormFieldArrayProps = {
  collectionName: string;
  title: string;
  editPath?: string;
  formFieldNames: FormFieldProps[];
};

export const FormFieldArray = ({
  collectionName,
  title,
  editPath,
  formFieldNames,
}: FormFieldArrayProps) => {
  const router = useRouter();
  const { control, getValues } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: collectionName,
  });

  const ConditionalEditButton = ({ index }: { index: number }) => {
    if (editPath === undefined) return;

    const fieldId = formFieldNames.find((x) => x.isFieldId === true);

    if (fieldId === undefined) return;

    const value = getValues(`${collectionName}.${index}.${fieldId?.name}`);

    if (!value) return;

    return (
      <Button
        variant="contained"
        onClick={() => {
          if (editPath) {
            router.push(editPath.replace(`:${fieldId.name}`, value));
          }
        }}
        sx={{ marginRight: 1 }}
      >
        Edit
      </Button>
    );
  };

  return (
    <FormSection title={title}>
      {fields.map((field, index) => (
        <Grid
          container
          alignItems="stretch"
          key={field.id}
          sx={{ marginBottom: 1 }}
        >
          <Grid item xs={12} md={10}>
            {formFieldNames.map((fieldProps) => {
              if (fieldProps.hidden) {
                return (
                  <FormHiddenInput
                    key={`${field.id}.${fieldProps.name}`}
                    name={`${collectionName}.${index}.${fieldProps.name}`}
                  />
                );
              }
              if (fieldProps.select) {
                return (
                  <FormSelectField
                    key={`${field.id}.${fieldProps.name}`}
                    name={`${collectionName}.${index}.${fieldProps.name}`}
                    label={fieldProps.label}
                    selectItems={fieldProps.selectItems ?? []}
                  />
                );
              }
              return (
                <FormTextField
                  key={`${field.id}.${fieldProps.name}`}
                  label={fieldProps.label}
                  name={`${collectionName}.${index}.${fieldProps.name}`}
                />
              );
            })}
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ConditionalEditButton index={index} />
            <Button variant="outlined" onClick={() => remove(index)}>
              Remove
            </Button>
          </Grid>
        </Grid>
      ))}
      <Button
        variant="contained"
        onClick={() =>
          append(
            formFieldNames
              .map((item) => item.name)
              .reduce((a, v) => ({ ...a, [v]: "" }), {})
          )
        }
      >
        Add
      </Button>
    </FormSection>
  );
};

export default FormFieldArray;
