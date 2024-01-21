import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import ManagmentNavbar from "../../components/ManagmentNavbar";
import Nav from "./Nav";
import { APP_BAR_DESKTOP, APP_BAR_MOBILE } from "./consts";
import { useAuth } from "../../auth";
import { Paths, Roles } from "../../constants";
import { useRouter } from "../../routes/hooks";

const StyledRoot = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const Main = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  background: theme.palette.background.default,
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

export const ManagmentLayout = () => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser?.role || currentUser.role !== Roles.ADMIN) {
      router.push(Paths.NOT_FOUND);
    }
  }, [currentUser]);

  return (
    <>
      <StyledRoot>
        <ManagmentNavbar onOpenNav={() => setOpen(true)} />
        <Nav open={open} onClose={() => setOpen(false)} />
        <Main>
          <Outlet />
        </Main>
      </StyledRoot>
    </>
  );
};

export default ManagmentLayout;
