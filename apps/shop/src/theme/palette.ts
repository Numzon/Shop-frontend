import { PaletteMode, ThemeOptions } from "@mui/material";
import { grey, purple } from "@mui/material/colors";

const lightModePalette: Partial<ThemeOptions["palette"]> = {
  mode: "light",
  primary: {
    main: purple[400],
  },
  secondary: {
    main: "#6a1b9a",
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
  // primary: {
  //   main: "#121212",
  // },
  secondary: {
    main: "#6a1b9a",
  },
  background: {
    default: "#0c0c0c",
  },
};

export const getPalette = (mode: PaletteMode) =>
  mode === "dark" ? darkModePalette : lightModePalette;
