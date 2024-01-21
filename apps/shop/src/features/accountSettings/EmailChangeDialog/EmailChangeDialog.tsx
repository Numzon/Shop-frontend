import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { EmailFormValues, emailFormValidationSchema } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Stack } from "@mui/material";
import FormTextField from "../../../components/FormInputs/FormTextField";
import FormHiddenInput from "../../../components/FormHiddenInput";
import { useEffect } from "react";
import { UserDto } from "../../../types";
import { useChangeEmail } from "../../../api/hooks/User/useChangeEmail";
import { mapFormValuesToChangeEmailRequest } from "./utils";

type EmailChangeDialogProps = {
  user: UserDto;
  open: boolean;
  onCancel: () => void;
  onSuccess: () => void;
};

export const EmailChangeDialog = ({
  user,
  open,
  onCancel,
  onSuccess,
}: EmailChangeDialogProps) => {
  const formMethods = useForm<EmailFormValues>({
    resolver: zodResolver(emailFormValidationSchema),
  });
  const { handleSubmit, setError, reset } = formMethods;

  const { mutateAsync } = useChangeEmail();

  useEffect(() => {
    reset({ ...user });
  }, []);

  const onSubmit: SubmitHandler<EmailFormValues> = async (values) => {
    await mutateAsync(mapFormValuesToChangeEmailRequest(values), {
      onSuccess: () => {
        onSuccess();
      },
      onError: (error) => {
        setError(`root.${error.name}`, {
          type: "manual",
          message: error.message,
        });
      },
    });
  };

  return (
    <Dialog open={open} fullWidth maxWidth="sm">
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Change email</DialogTitle>
          <DialogContent>
            <Stack spacing={2}>
              <FormHiddenInput name="id" />
              <FormTextField name="email" label="Current Email" disabled />
              <FormTextField name="newEmail" label="New email" />
              <FormTextField type="password" name="password" label="Password" />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={onCancel} variant="outlined">
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              Save
            </Button>
          </DialogActions>
        </form>
      </FormProvider>
    </Dialog>
  );
};

export default EmailChangeDialog;
