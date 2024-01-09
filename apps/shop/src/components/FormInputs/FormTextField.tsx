import { TextField, TextFieldProps } from "@mui/material";
import { useController, useFormContext } from "react-hook-form";
import { FormField } from "../../types";

export type FormTextFieldProps = FormField &
  Omit<TextFieldProps, "inputRef" | "label" | "value" | "error" | "onChange">;

export const FormTextField = ({
  name,
  label,
  disabled,
  ...otherProps
}: FormTextFieldProps) => {
  const { control } = useFormContext();
  const {
    field: { ref, value, ...fieldProps },
    fieldState: { error, invalid },
  } = useController({ name, control });

  return (
    <TextField
      inputRef={ref}
      label={label}
      value={value ?? ""}
      error={invalid}
      helperText={error?.message ?? otherProps.helperText}
      fullWidth
      {...otherProps}
      {...fieldProps}
      disabled={disabled}
    />
  );
};

export default FormTextField;
