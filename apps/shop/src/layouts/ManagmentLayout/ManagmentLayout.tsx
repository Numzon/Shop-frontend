import { useState } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Header from "./Header";
import Nav from "./Nav";
import { APP_BAR_DESKTOP, APP_BAR_MOBILE } from "./consts";

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
  return (
    <>
      <StyledRoot>
        <Header onOpenNav={() => setOpen(true)} />
        <Nav open={open} onClose={() => setOpen(false)} />
        <Main>
          <Outlet />
        </Main>
      </StyledRoot>
    </>
  );
};

export default ManagmentLayout;
