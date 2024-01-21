import { styled } from "@mui/material/styles";
import { Box, Stack, AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  APP_BAR_DESKTOP,
  APP_BAR_MOBILE,
  NAV_WIDTH,
} from "../../layouts/ManagmentLayout/consts";
import ThemeModeSwitch from "./ThemeModeSwitch";
import UserPanelSwitch from "./UserPanelSwitch";
import AccountIcon from "../AccountIcon";

const StyledRoot = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  [theme.breakpoints.up("lg")]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: APP_BAR_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: APP_BAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

export function ManagmentNavbar({ onOpenNav }: { onOpenNav: () => void }) {
  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: "text.primary",
            display: { lg: "none" },
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          {/* <LanguagePopover /> */}
          <UserPanelSwitch />
          <ThemeModeSwitch />
          <AccountIcon />
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}

export default ManagmentNavbar;
