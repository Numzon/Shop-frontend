import { Box, Card, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Paths } from "../../constants";
import { useRouter } from "../../routes/hooks/useRouter";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { SignUpFormValues, signUpValidationSchema } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import SignUpForm from "./SignUpForm";
import { useSignUp } from "../../api/hooks/Auth";
import { useAuth } from "../../auth";

const SignUpPage = () => {
  const formMethods = useForm<SignUpFormValues>({
    defaultValues: { email: "", password: "", passwordConfirmation: "" },
    resolver: zodResolver(signUpValidationSchema),
  });
  const { handleSubmit, setError } = formMethods;
  const router = useRouter();
  const { mutateAsync } = useSignUp();
  const { setTokens } = useAuth();

  const onSubmit: SubmitHandler<SignUpFormValues> = async (values) => {
    await mutateAsync(
      {
        email: values.email,
        password: values.password,
        repeatPassword: values.passwordConfirmation,
      },
      {
        onSuccess: (result) => {
          if (result.success) {
            setTokens(result.token, result.refreshToken);
            router.push(Paths.HOME);
          }
        },
        onError: (error) => {
          if (error instanceof Error) {
            setError(`root.${error.name}`, {
              type: "manual",
              message: error.message,
            });
          }
        },
      }
    );
  };

  return (
    <Box sx={{ height: 1 }}>
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card sx={{ maxWidth: 420, width: 1, p: 5 }}>
          <Typography variant="h4">Sign up to shop</Typography>
          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            Already have an account?
            <Link
              to={Paths.SIGN_IN}
              style={{ textDecoration: "none", marginLeft: 5 }}
            >
              Sign In
            </Link>
          </Typography>
          <FormProvider {...formMethods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <SignUpForm />
            </form>
          </FormProvider>
        </Card>
      </Stack>
    </Box>
  );
};

export default SignUpPage;
