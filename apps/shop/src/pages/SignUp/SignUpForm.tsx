import { Button, Stack } from "@mui/material";
import FormTextField from "../../components/FormInputs/FormTextField";

const SignUpForm = () => {
  return (
    <>
      <Stack spacing={3}>
        <FormTextField name="email" label="Email" />
        <FormTextField name="password" label="Password" type="password" />
        <FormTextField
          name="passwordConfirmation"
          label="Confirm password"
          type="password"
        />
      </Stack>
      <Stack sx={{ my: 3 }}></Stack>
      <Button
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
      >
        Sign up
      </Button>
    </>
  );
};

export default SignUpForm;
