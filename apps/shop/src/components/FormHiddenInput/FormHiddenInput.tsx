import { useController, useFormContext } from "react-hook-form";

type FormHiddenInputProps = {
  name: string;
};

export const FormHiddenInput = ({ name }: FormHiddenInputProps) => {
  const { control } = useFormContext();
  const {
    field: { ref, value, ...fieldProps },
  } = useController({ name, control });

  return <input ref={ref} value={value ?? ""} {...fieldProps} hidden={true} />;
};

export default FormHiddenInput;
