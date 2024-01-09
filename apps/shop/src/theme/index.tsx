import { useMemo } from "react";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
  ThemeOptions,
} from "@mui/material/styles";
import { useModeContext } from "./PaletteModeContext";
import { CssBaseline } from "@mui/material";
import GlobalStyles from "./GlobalStyles";
import { getPalette } from "./palette";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { mode } = useModeContext();
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: getPalette(mode),
      shape: { borderRadius: 6 },
      components: {
        MuiTextField: {
          defaultProps: {
            variant: "filled",
          },
        },
      },
    }),
    [mode]
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
