import { IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React, { useState } from "react";
import { useAuth } from "../../auth";
import { useTranslation } from "react-i18next";
import { useRouter } from "../../routes/hooks";
import { Paths } from "../../constants";

const AccountIcon = () => {
  const { currentUser, signOut } = useAuth();
  const { t } = useTranslation();
  const router = useRouter();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleCloseUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  type AccountItemProps = {
    key: string;
    name: string;
    onClick: () => void;
  };

  const accountPopoverSetting: AccountItemProps[] = [
    {
      key: "user-profile",
      name: "My account",
      onClick: () => {
        setAnchorElUser(null);
        router.push(Paths.UserAccount.MAIN);
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
      name: t("Sign In"),
      onClick: () => {
        router.push(Paths.Authentication.SIGN_IN);
      },
    },
    {
      key: "sign-up",
      name: t("Sign Up"),
      onClick: () => {
        router.push(Paths.Authentication.SIGN_UP);
      },
    },
  ];

  return (
    <IconButton sx={{ ml: 1 }} onClick={handleOpenUserMenu} color="inherit">
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
  );
};

export default AccountIcon;
