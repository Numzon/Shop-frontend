import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useAuth } from "../../auth";
import { useRouter } from "../../routes/hooks/useRouter";
import { Paths } from "../../constants";
import { useTranslation } from "react-i18next";

const pages = ["Products", "Pricing", "Blog"];

export const Navbar = () => {
  const { currentUser, signOut } = useAuth();
  const { t } = useTranslation();
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorElUser(null);
  };

  // export const accountPopoverSetting = [
  //   "Profile",
  //   "Account",
  //   "Dashboard",
  //   "Logout",
  // ];
  type AccountItemProps = {
    key: string;
    name: string;
    onClick: () => void;
  };

  const accountPopoverSetting: AccountItemProps[] = [
    {
      key: "user-profile",
      name: "Profile",
      onClick: () => {
        console.error("to do");
        setAnchorElUser(null);
      },
    },
    {
      key: "sign-out",
      name: "Sign out",
      onClick: () => {
        signOut();
        setAnchorElUser(null);
      },
    },
  ];

  const authenticationItems: AccountItemProps[] = [
    {
      key: "sign-in",
      name: t("SignIn"),
      onClick: () => {
        router.push(Paths.SIGN_IN);
      },
    },
    {
      key: "sign-up",
      name: t("SignUp"),
      onClick: () => {
        handleCloseNavMenu();
        router.push(Paths.SIGN_UP);
      },
    },
  ];

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            data-testid="custom-element"
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {currentUser && (
            <IconButton
              sx={{ ml: 1 }}
              color="inherit"
              onClick={() => router.push(Paths.MANAGMENT_CENTER)}
            >
              <DesignServicesIcon />
            </IconButton>
          )}

          <IconButton
            sx={{ ml: 1 }}
            onClick={handleOpenUserMenu}
            color="inherit"
          >
            <Tooltip title="Open settings">
              <AccountCircleIcon />
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {currentUser &&
                accountPopoverSetting.map((item) => (
                  <MenuItem key={item.key} onClick={item.onClick}>
                    <Typography textAlign="center">{item.name}</Typography>
                  </MenuItem>
                ))}
              {!currentUser &&
                authenticationItems.map((item) => (
                  <MenuItem key={item.key} onClick={item.onClick}>
                    <Typography textAlign="center">{item.name}</Typography>
                  </MenuItem>
                ))}
            </Menu>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
