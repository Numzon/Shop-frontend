import { useController, useFormContext } from "react-hook-form";
import { FormField, SelectItem } from "../../types";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";

export type FormSelectFieldProps = FormField &
  Omit<SelectProps, "inputRef" | "label" | "value" | "error" | "onChange"> & {
    selectItems: SelectItem[];
    helperText?: string;
  };

export const FormSelectField = ({
  name,
  label,
  selectItems,
  ...otherProps
}: FormSelectFieldProps) => {
  const { control } = useFormContext();
  const {
    field: { ref, value, ...fieldProps },
    fieldState: { error, invalid },
  } = useController({ name, control });

  return (
    <FormControl fullWidth variant="filled">
      <InputLabel id={`${name}-select-label`}>{label}</InputLabel>
      <Select
        labelId={`${name}-select-label`}
        value={value ?? ""}
        error={invalid}
        label={label}
        {...otherProps}
        {...fieldProps}
      >
        <MenuItem value={undefined}>
          <em>Select</em>
        </MenuItem>

        {selectItems.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
      {error?.message ||
        (otherProps.helperText && (
          <FormHelperText sx={{ color: "#f44336" }}>
            {error?.message ?? otherProps.helperText}
          </FormHelperText>
        ))}
    </FormControl>
  );
};

export default FormSelectField;
