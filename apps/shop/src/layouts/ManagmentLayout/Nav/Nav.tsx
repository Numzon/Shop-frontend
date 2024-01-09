import { useEffect } from "react";
import {
  Box,
  useMediaQuery,
  useTheme,
  Drawer,
  Typography,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import ScrollBar from "../../../components/ScrollBar";
import NavSection from "../../../components/NavSection";
import { NAV_WIDTH } from "../consts";
import { useLocation } from "react-router-dom";
import navConfig from "./config";

type NavProps = {
  open: boolean;
  onClose: () => void;
};

export const Nav = ({ open, onClose }: NavProps) => {
  const { pathname } = useLocation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(() => {
    if (open) {
      onClose();
    }
  }, [pathname]);

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      <div style={{ marginBottom: 8 }}></div>
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: "backgroud.paper",
              borderRightStyle: "dashed",
            },
          }}
        >
          <NavContent />
        </Drawer>
      ) : (
        <Drawer
          open={open}
          onClose={onClose}
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
            },
          }}
          ModalProps={{
            keepMounted: true,
          }}
        ></Drawer>
      )}
    </Box>
  );
};

const NavContent = () => {
  return (
    <ScrollBar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box display="flex" alignItems="flex-start" p={2}>
        <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <Typography fontSize="1.25rem" fontWeight="bold">
          Brand
        </Typography>
      </Box>

      <NavSection data={navConfig} />
      <Box sx={{ flexGrow: 1 }} />
    </ScrollBar>
  );
};

export default Nav;
