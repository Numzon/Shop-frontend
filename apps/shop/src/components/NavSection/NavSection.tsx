import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import {
  Box,
  List,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";

type NavSectionProps = {
  data: {
    title: string;
    path: string;
    Icon?: React.ComponentType;
  }[];
};

export default function NavSection({ data = [], ...other }: NavSectionProps) {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
  );
}

function NavItem({
  item,
}: {
  item: { title: string; path: string; Icon?: React.ComponentType };
}) {
  const { title, path, Icon } = item;

  return (
    <StyledNavItem
      LinkComponent={RouterLink}
      to={path}
      sx={{
        "&.active": {
          color: "text.primary",
          bgcolor: "action.selected",
          fontWeight: "fontWeightBold",
        },
      }}
    >
      <StyledNavItemIcon>{Icon && <Icon />}</StyledNavItemIcon>
      <ListItemText disableTypography primary={title} />
    </StyledNavItem>
  );
}

const StyledNavItem = styled(ListItemButton)<{ to: string }>(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}));

const StyledNavItemIcon = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
