import { IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import { useAuth } from "../../../auth";

const AccountPopover = () => {
  const { signOut } = useAuth();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

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
        {accountPopoverSetting.map((item) => (
          <MenuItem key={item.key} onClick={item.onClick}>
            <Typography textAlign="center">{item.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </IconButton>
  );
};

export default AccountPopover;
