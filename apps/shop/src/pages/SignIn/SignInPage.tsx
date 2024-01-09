import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { SignInFormValues, signInValidationSchema } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "../../routes/hooks/useRouter";
import { useSignIn } from "../../api/hooks/Auth";
import { useAuth } from "../../auth";
import { Box, Card, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Paths } from "../../constants";
import SignInForm from "./SignInForm";

export const SignInPage = () => {
  const formMethods = useForm<SignInFormValues>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(signInValidationSchema),
  });
  const { handleSubmit, setError } = formMethods;
  const router = useRouter();
  const { mutateAsync } = useSignIn();
  const { setTokens } = useAuth();

  const onSubmit: SubmitHandler<SignInFormValues> = async (values) => {
    await mutateAsync(
      {
        email: values.email,
        password: values.password,
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
          <Typography variant="h4">Sign in to shop</Typography>
          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            Don’t have an account?
            <Link
              to={Paths.SIGN_UP}
              style={{ textDecoration: "none", marginLeft: 5 }}
            >
              Sign In
            </Link>
          </Typography>
          <FormProvider {...formMethods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <SignInForm />
            </form>
          </FormProvider>
        </Card>
      </Stack>
    </Box>
  );
};

export default SignInPage;
