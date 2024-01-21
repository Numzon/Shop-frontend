import { IconButton, useTheme } from "@mui/material";
import { useModeContext } from "../../theme/PaletteModeContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ThemeModeSwitch = () => {
  const theme = useTheme();
  const { switchMode } = useModeContext();

  return (
    <IconButton sx={{ ml: 1 }} onClick={switchMode} color="inherit">
      {theme.palette.mode === "dark" ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
};

export default ThemeModeSwitch;
