import { PaletteMode, ThemeOptions } from "@mui/material";
import { grey, purple } from "@mui/material/colors";

const lightModePalette: Partial<ThemeOptions["palette"]> = {
  mode: "light",
  primary: {
    main: purple[400],
  },
  background: {
    default: grey[50],
  },
};

const darkModePalette: Partial<ThemeOptions["palette"]> = {
  mode: "dark",
  primary: {
    main: purple[400],
  },
};

export const getPalette = (mode: PaletteMode) =>
  mode === "dark" ? darkModePalette : lightModePalette;
