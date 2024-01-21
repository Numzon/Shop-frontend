import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import LinkButton from "../../components/LinkButton";
import { Paths } from "../../constants";

type UserAccountPathsProps = {
  to: string;
  title: string;
};

export const UserAccountLayout = () => {
  const paths: UserAccountPathsProps[] = [
    {
      to: "",
      title: "Orders",
    },
    {
      to: Paths.ACCOUNT_SETTINGS,
      title: "Account settings",
    },
    {
      to: "",
      title: "Complaints",
    },
  ];

  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 3, mb: 5 }}>
        My Account
      </Typography>
      <Grid container>
        <Grid item xs={12} md={3}>
          <Stack spacing={2}>
            {paths.map((path, index) => (
              <LinkButton key={index} to={path.to} variant="contained">
                {path.title}
              </LinkButton>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box sx={{ mx: 3 }}>
            <Outlet />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserAccountLayout;
